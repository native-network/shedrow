pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

import "./TribeInterface.sol";
import "./VaultInterface.sol";


/// @title Native Tribe.
contract Tribe is TribeInterface, Ownable {
    string public name;
    ERC20 public nativeToken;
    MintableToken public tribeToken;
    uint256 public minimumStake;

    /** @dev Construct Native Tribe.
      * @param _name Name of tribe.
      * @param _nativeToken Address of Native Token to be used.
      * @param _tribeToken Address of Tribe Token to be used.
      * @param _minimumStake Minimum tribe tokens needed for membership.
      */
    function Tribe(
        string _name,
        ERC20 _nativeToken,
        MintableToken _tribeToken,
        uint256 _minimumStake
    ) public {
        name = _name;
        nativeToken = _nativeToken;
        tribeToken = _tribeToken;
        minimumStake = _minimumStake;
    }

    modifier memberOnly() {
        require(_isMember(msg.sender));
        _;
    }

    /// @dev Return true if `member` is member`.
    function isMember(address member) external view returns (bool) {
        return _isMember(member);
    }

    /// @dev Stake `amount` Native Token.
    function stake(uint256 amount) external {
        require(nativeToken.transferFrom(msg.sender, this, amount));
        require(tribeToken.mint(msg.sender, amount));

        emit Stake(msg.sender, amount);
    }

    /// @dev Unstake `amount` Tribe Token.
    function unstake(uint256 amount) external {
        require(tribeToken.transferFrom(msg.sender, this, amount));
        require(nativeToken.transfer(msg.sender, amount));

        emit Unstake(msg.sender, amount);
    }

    /// @dev Return true if `member` has enough tokens staked.
    function _isMember(address member) internal view returns (bool) {
        return tribeToken.balanceOf(member) >= minimumStake;
    }
}
