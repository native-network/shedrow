const NativeToken = artifacts.require("contracts/NativeToken.sol");

contract("NativeToken", accounts => {
  let token;

  beforeEach(async () => {
    token = await NativeToken.new();
  });

  it("should be created correctly", async () => {
    const owner = await token.owner();
    assert.equal(owner, accounts[0]);
  });

  it("can have its owner transferred", async() => {
    await token.transferOwnership(accounts[1]);
    const newOwner = await token.owner();
    assert.equal(newOwner, accounts[1]);
  });
});
