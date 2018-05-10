const assertRejected = require("assert-rejected");
const testHelper = require("truffle-test-helpers");

const TribeToken = artifacts.require("contracts/TribeToken.sol");
const TokenVault = artifacts.require("contracts/TokenVault.sol");

contract("TokenVault", accounts => {
  let tribeToken;
  let vault;
  let deadline;
  let deadlineAfter;

  const fundingGoalHalf = 50;
  const fundingGoal = fundingGoalHalf * 2;

  const options = {from: accounts[1]};
  const otherOptions = {from: accounts[2]};
  const otherOtherOptions = {from: accounts[3]};
  const receiver = accounts[0];
  const fallback = accounts[4];

  before(async () => {
    await testHelper.advanceBlock();
  });

  beforeEach(async () => {
    tribeToken = await TribeToken.new("Tribe Token", "TRIB");

    await tribeToken.mint(accounts[1], fundingGoalHalf);
    await tribeToken.mint(accounts[2], fundingGoalHalf);
    await tribeToken.mint(accounts[3], fundingGoalHalf);

    deadline = testHelper.latestTime() + testHelper.duration.weeks(1);
    deadlineAfter = deadline + testHelper.duration.hours(1);

    vault = await TokenVault.new(
      fundingGoal,
      deadline,
      tribeToken.address,
      fallback,
    );
  });

  it("needs a valid token address", async () => {
    await assertRejected(
      TokenVault.new(fundingGoal, deadline, "0x0", fallback)
    );
  });

  it("should be created correctly", async () => {
    assert.equal(await vault.owner(), accounts[0]);
  });

  describe("no funding", () => {
    it("can transfer from account 1", async () => {
      await tribeToken.approve(vault.address, fundingGoalHalf, options);
      await vault.fund(fundingGoalHalf, options);
      let balance = await vault.funding();
      assert.equal(balance, fundingGoalHalf);
    });
  });

  describe("partially funded", () => {
    beforeEach(async () => {
      await tribeToken.approve(vault.address, fundingGoalHalf, options);
      await vault.fund(fundingGoalHalf, options);
    });

    it("is partially funded", async () => {
      assert.isFalse(await vault.isFunded());
    });

    it("won't release before deadline", async () => {
      await assertRejected(vault.releaseFunds());
    });

    it("won't release to fallback before deadline", async () => {
      await assertRejected(vault.releaseFallback());
      let balance = await tribeToken.balanceOf(fallback);
      assert.equal(balance.toNumber(), 0);
    });

    describe("after deadline", () => {
      beforeEach(async () => {
        await testHelper.increaseTimeTo(deadlineAfter);
      });

      it("won't release after deadline", async () => {
        await assertRejected(vault.releaseFunds());
        let balance = await tribeToken.balanceOf(receiver);
        assert.equal(balance.toNumber(), 0);
      });

      it("release to fallback on failure after deadline", async () => {
        await vault.releaseFallback();
        let balance = await tribeToken.balanceOf(fallback);
        assert.equal(balance.toNumber(), fundingGoalHalf);
      });

      it("won't accept funds after deadline", async () => {
        await vault.releaseFallback();

        await tribeToken.approve(vault.address, fundingGoalHalf, otherOptions);
        await assertRejected(vault.fund(fundingGoalHalf, otherOptions));
      });

      it("can't be funded after deadline", async () => {
        await tribeToken.approve(vault.address, fundingGoalHalf, otherOptions);
        await assertRejected(vault.fund(fundingGoalHalf, otherOptions));
      });
    });
  });

  describe("fully funded", () => {
    beforeEach(async () => {
      await tribeToken.approve(vault.address, fundingGoalHalf, options);
      await vault.fund(fundingGoalHalf, options);
      await tribeToken.approve(vault.address, fundingGoalHalf, otherOptions);
      await vault.fund(fundingGoalHalf, otherOptions);
    });

    it("is funded", async () => {
      assert.isTrue(await vault.isFunded());
    });

    it("won't release before deadline", async () => {
      await assertRejected(vault.releaseFunds());
      let balance = await tribeToken.balanceOf(receiver);
      assert.equal(balance.toNumber(), 0);
    });

    it("won't release to fallback before deadline", async () => {
      await assertRejected(vault.releaseFallback());
    });

    describe("after deadline", () => {
      beforeEach(async () => {
        await testHelper.increaseTimeTo(deadlineAfter);
      });

      it("will release after deadline", async () => {
        await vault.releaseFunds();
        let balance = await tribeToken.balanceOf(receiver);
        assert.equal(balance.toNumber(), fundingGoal);
      });

      it("won't release to fallback after deadline", async () => {
        await assertRejected(vault.releaseFallback());
        await vault.releaseFunds();
        await vault.releaseFallback();
        let balance = await tribeToken.balanceOf(fallback);
        assert.equal(balance.toNumber(), 0);
      });

      it("refuses additional funding after deadline", async () => {
        await tribeToken.approve(
          vault.address, fundingGoalHalf, otherOtherOptions
        );
        await assertRejected(
          vault.fund(fundingGoalHalf, otherOtherOptions)
        );
      });
    });
  });
});
