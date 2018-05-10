pragma solidity ^0.4.21;

/// @title Interface for ERC20 token vaults
interface VaultInterface {
    event Funded();
    event Refund(address to, uint256 amount);
    event ReceiveFunding(address from, uint256 amount);

    /// @dev return currently available funding
    function funding() external view returns (uint256);
    /// @dev return true if vault can not be funded anymore
    function isExpired() external view returns (bool);
    /// @dev return true if vault is fully funded
    function isFunded() external view returns (bool);
    /// @dev let msg.sender fund with `amount` ERC20 tokens
    function fund(uint256 amount) external;
    /// @dev release fallback to fallback address if funding has failed
    function releaseFallback() external;
    /// @dev release funds to beneficiary if fully funded
    function releaseFunds() external;
}
