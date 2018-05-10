pragma solidity ^0.4.21;

import "./Vault.sol";

/// @title ERC20 Vault with flexible funding goal.
contract TokenVault is Vault {
    address public fallback;

    /** @dev Construct TokenVault.
      * @param _fundingGoal Minimum amount of tokens to be raised
      * @param _fundingDeadline UNIX timestamp until funds need to be raised
      * @param _token ERC20 token used for funding.
      * @param _fallback Beneficiary if funding goal not reached
      */
    function TokenVault(
        uint256 _fundingGoal,
        uint256 _fundingDeadline,
        ERC20 _token,
        address _fallback
    ) Vault(_fundingGoal, _fundingDeadline, _token) public {
        fallback = _fallback;
    }

    /// @dev Fund vault with `amount` token.
    function fund(uint256 amount) external {
        _withdraw(amount);
    }

    /// @dev Release funds to vault owner.
    function releaseFunds() external {
        require(_isFunded());
        require(_isExpired());

        require(token.transfer(owner, _funding()));

        emit Funded();
    }

    /// @dev Release funds to fallback address.
    function releaseFallback() external {
        require(_isExpired());
        require(!_isFunded());

        uint256 amount = _funding();

        require(token.transfer(fallback, amount));

        emit Refund(fallback, amount);
    }
}
