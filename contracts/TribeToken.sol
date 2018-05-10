pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


/// @title ERC20 compatible token for Native Tribes
contract TribeToken is Ownable, MintableToken {
    string public name;
    string public symbol;
    uint256 constant public decimals = 18;

    /// @dev Constructor that accepts a name and a symbol
    function TribeToken(
        string _name,
        string _symbol
    ) public {
        name = _name;
        symbol = _symbol;
    }
}
