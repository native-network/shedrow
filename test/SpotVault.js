const assertRejected = require("assert-rejected");
const testHelper = require("truffle-test-helpers");
const utils = require("web3-utils");

const TribeToken = artifacts.require("contracts/TribeToken.sol");
const SpotVault = artifacts.require("contracts/SpotVault.sol");

contract("SpotVault", accounts => {
  let tribeToken;
  let vault;
  let deadline;
  let deadlineAfter;
  let spots = 2;
  let spotPrice = utils.toWei("125", "ether");
  let wrongSpotPrice = utils.toWei("126", "ether");

  let options = {from: accounts[1]};
  let otherOptions = {from: accounts[2]};

  before(async () => {
    await testHelper.advanceBlock();
  });

  beforeEach(async () => {
    tribeToken = await TribeToken.new("Tribe Token", "TRIB");
    await tribeToken.mint.sendTransaction(accounts[1], spotPrice);
    await tribeToken.mint.sendTransaction(accounts[2], spotPrice);

    deadline = testHelper.latestTime() + testHelper.duration.weeks(1);
    deadlineAfter = deadline + testHelper.duration.hours(1);

    vault = await SpotVault.new(
      spotPrice,
      spots,
      deadline,
      tribeToken.address,
    );
  });

  it("needs a valid token address", async () => {
    await assertRejected(SpotVault.new(1, 1, 1, "0x0"));
  });

  it("should be created correctly", async () => {
    assert.equal(await vault.owner(), accounts[0]);
  });

  describe("with no funding", () => {
    it("can transfer from account 1", async () => {
      await tribeToken.approve(vault.address, spotPrice, options);
      await vault.fund(spotPrice, options);
      let balance = await vault.funding();
      assert.equal(balance, spotPrice);
    });

    it("requires the correct amount of funding", async () => {
      await tribeToken.approve(vault.address, spotPrice, options);
      await assertRejected(vault.fund(wrongSpotPrice, options));
      let balance = await vault.funding();
      assert.equal(balance, 0);
    });
  });

  describe("partially funded", () => {
    beforeEach(async () => {
      await tribeToken.approve(vault.address, spotPrice, options);
      await vault.fund(spotPrice, options);
    });

    it("is partially funded", async () => {
      assert.isFalse(await vault.isFunded());
    });

    it("refuses additional funds from the same account", async () => {
      await tribeToken.mint.sendTransaction(accounts[1], spotPrice);
      await tribeToken.approve(vault.address, spotPrice, options);
      await assertRejected(vault.fund(spotPrice, options));
    });

    it("refuses additional funds on failure", async () => {
      await testHelper.increaseTimeTo(deadlineAfter);

      await tribeToken.approve(vault.address, spotPrice, otherOptions);
      await assertRejected(vault.fund(spotPrice, otherOptions));
      assert.isFalse(await vault.isFunded());
    });

    it("refuses to refund before deadline", async () => {
      await assertRejected(vault.releaseFallback(options));
    });

    it("allows refunding on failure", async () => {
      await testHelper.increaseTimeTo(deadlineAfter);
      await vault.releaseFallback(options);
      let balance = await tribeToken.balanceOf(accounts[1]);
      assert.equal(balance.toNumber(), spotPrice);
    });
  });

  describe("fully funded", () => {
    beforeEach(async () => {
      await tribeToken.approve(vault.address, spotPrice, options);
      await tribeToken.approve(vault.address, spotPrice, otherOptions);
      await vault.fund(spotPrice, options);
      await vault.fund(spotPrice, otherOptions);
    });

    it("is fully funded", async() => {
      assert.isTrue(await vault.isFunded());
    });

    it("refuses additional funds", async () => {
      let thirdAccount = {from: accounts[3]};
      await tribeToken.mint.sendTransaction(accounts[3], spotPrice);
      await tribeToken.approve(vault.address, spotPrice, thirdAccount);
      await assertRejected(vault.fund(spotPrice, thirdAccount));
    });

    it("pays out funding", async () => {
      await vault.releaseFunds();
      let balance = await tribeToken.balanceOf(accounts[0]);
      assert.equal(balance.toNumber(), spotPrice * spots);
    });
  });
});
