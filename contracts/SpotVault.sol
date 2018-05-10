pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";

import "./Vault.sol";


/// @title SpotVault for fixed amount of seats.
contract SpotVault is Vault {
    uint256 public spotPrice;
    uint256 public spots;

    /** @dev Construct SpotVault
      * @param _spotPrice Price per spot.
      * @param _spots Number of spots.
      * @param _fundingDeadline UNIX timestamp for funding deadline.
      * @param _token ERC20 token to be used.
      */
    function SpotVault(
        uint256 _spotPrice,
        uint256 _spots,
        uint256 _fundingDeadline,
        ERC20 _token
    ) Vault(SafeMath.mul(_spotPrice, _spots), _fundingDeadline, _token)
        public {
        spotPrice = _spotPrice;
        spots = _spots;
    }

    /// @dev Fund with `amount` token.
    function fund(uint256 amount) external {
        require(amount == spotPrice);
        require(!hasPaid[msg.sender]);
        require(!_isFunded());

        _withdraw(spotPrice);
    }

    /// @dev Release fallback to spot buyer under `msg.sender`
    function releaseFallback() external {
        require(_isExpired());
        require(!_isFunded());
        require(hasPaid[msg.sender]);

        hasPaid[msg.sender] = false;

        require(token.transfer(msg.sender, spotPrice));

        emit Refund(msg.sender, spotPrice);
    }

    /// @dev Release funds to contract owner.
    function releaseFunds() external {
        require(_isFunded());

        require(token.transfer(owner, _funding()));

        emit Funded();
    }
}
