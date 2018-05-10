const assertRejected = require("assert-rejected");

const Tribe = artifacts.require("contracts/Tribe.sol");
const NativeToken = artifacts.require("contracts/NativeToken.sol");
const TribeToken = artifacts.require("contracts/TribeToken.sol");

contract("Tribe", accounts => {
  let tribe;
  let tribeToken;
  let nativeToken;
  const minimumStake = 100;

  beforeEach(async () => {
    nativeToken = await NativeToken.new();
    await nativeToken.mint(accounts[0], minimumStake);
    tribeToken = await TribeToken.new("Tribe Token", "TRIB");
    tribe = await Tribe.new(
      "Tribe",
      nativeToken.address,
      tribeToken.address,
      minimumStake,
    );
    await tribeToken.transferOwnership(tribe.address);
  });

  it("should be created correctly", async () => {
    const owner = await tribe.owner();
    assert.equal(owner, accounts[0]);
    assert.equal(await tribe.name(), "Tribe");
  });

  describe("isMember", () => {
    it("does not regard anyone as a member", async () => {
      assert.isFalse(await tribe.isMember(accounts[0]));
    });

    it("knows who has staked", async () => {
      await nativeToken.approve(tribe.address, minimumStake);
      await tribe.stake(minimumStake);
      assert.isTrue(await tribe.isMember(accounts[0]));
      assert.equal(await tribeToken.balanceOf(accounts[0]), minimumStake);
      assert.equal(await nativeToken.balanceOf(accounts[0]), 0);
    });
  });

  describe("unstake", () => {
    it("will fail if nothing has been staked", async () => {
      await assertRejected(tribe.unstake(minimumStake));
    });
    it("will unstake successfully", async () => {
      await nativeToken.approve(tribe.address, minimumStake);
      await tribe.stake(minimumStake);
      assert.isTrue(await tribe.isMember(accounts[0]));

      await tribeToken.approve(tribe.address, minimumStake);
      await tribe.unstake(minimumStake);
      assert.isFalse(await tribe.isMember(accounts[0]));
      assert.equal(await tribeToken.balanceOf(accounts[0]), 0);
      assert.equal(await nativeToken.balanceOf(accounts[0]), minimumStake);
    });
  });
});
