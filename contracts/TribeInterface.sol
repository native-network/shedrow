pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


/// @title Interface for native tribes
interface TribeInterface {
    event Stake(address from, uint256 amount);
    event Unstake(address to, uint256 amount);

    /// @dev Return whether `member` is a member of this tribe
    function isMember(address member) external view returns (bool);
    /// @dev Stake `amount` tokens in approve/transferFrom cycle in Tribe
    function stake(uint256 amount) external;
    /// @dev Unstake `amount` tokens in approve/transferFrom cycle from Tribe
    function unstake(uint256 amount) external;
}
