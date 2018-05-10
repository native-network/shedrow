const utils = require("web3-utils");

const TribeToken = artifacts.require("contracts/TribeToken.sol");


contract("TribeToken", accounts => {
  let token;

  beforeEach(async () => {
    token = await TribeToken.new("Tribe Token", "TRIB");
  });

  it("should be created correctly", async () => {
    const owner = await token.owner();
    assert.equal(owner, accounts[0]);
    assert.equal(await token.name(), "Tribe Token");
  });

  it("can be minted", async () => {
    await token.mint.sendTransaction(accounts[1], utils.toWei("75000"));
    let balance = await token.balanceOf(accounts[1]);
    assert.equal(
      balance.toNumber(),
      utils.toWei("75000"),
    );
  });
});
