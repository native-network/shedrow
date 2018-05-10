const NativeToken = artifacts.require("contracts/NativeToken.sol");
const TribeToken = artifacts.require("contracts/TribeToken.sol");
const Tribe = artifacts.require("contracts/Tribe.sol");

module.exports = function(deployer) {
  deployer.deploy(
    NativeToken
  ).then(() => {
    deployer.deploy(
      TribeToken, "Tribe Token", "TT"
    ).then(() => {
      deployer.deploy(
        Tribe,
        "Native Tribe",
        NativeToken.address,
        TribeToken.address,
        100,
      ).then(() => {
        let token = TribeToken.at(TribeToken.address);
        return token.transferOwnership(Tribe.address);
      });
    });
  });
};
