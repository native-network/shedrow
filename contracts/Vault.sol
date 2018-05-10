pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./VaultInterface.sol";

/// @title Abstract vault class
/// @dev releaseFallback and releaseFunding are not implemented here
contract Vault is VaultInterface, Ownable {
    ERC20 public token;
    uint256 public fundingGoal;
    uint256 public fundingDeadline;

    mapping(address => bool) public hasPaid;

    /// @dev Create vault with funding goal, deadline and token address
    function Vault(
        uint256 _fundingGoal,
        uint256 _fundingDeadline,
        ERC20 _token
    ) public {
        require(address(_token) != 0x0);
        fundingGoal = _fundingGoal;
        fundingDeadline = _fundingDeadline;
        token = _token;
    }

    /// @dev External view of internal `_isExpired()` function
    function isExpired() external view returns (bool) {
        return _isExpired();
    }

    /// @dev External view of internal `_funding()` function
    function funding() external view returns (uint256) {
        return _funding();
    }

    /// @dev External view of internal _isFunded()` function
    function isFunded() external view returns (bool) {
        return _isFunded();
    }

    /// @dev Return available funding
    function _funding() internal view returns (uint256) {
        return token.balanceOf(this);
    }

    /// @dev Return true if current block time exceeds funding deadline
    function _isExpired() internal view returns (bool) {
        return block.timestamp >= fundingDeadline;
    }

    /// @dev Return whether funding goal has been reached
    function _isFunded() internal view returns (bool) {
        return _funding() >= fundingGoal;
    }

    /// @dev Withdraw `amount` ERC20 token from `msg.sender`
    function _withdraw(uint256 amount) internal {
        require(!_isExpired());

        hasPaid[msg.sender] = true;

        require(token.transferFrom(msg.sender, this, amount));

        emit ReceiveFunding(msg.sender, amount);
    }
}
