pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "./TribeToken.sol";


/// @title Native Token.
contract NativeToken is MintableToken {
    string constant public name = "Native Token";
    string constant public symbol = "NTT";
    uint8 public decimals = 18;
}
