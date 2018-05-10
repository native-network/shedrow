pragma solidity ^0.4.17;


/// @title Migrations contract for truffle
contract Migrations {
    address public owner;
    uint public last_completed_migration;

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    /// @dev Migrations constructor.
    function Migrations() public {
        owner = msg.sender;
    }

    /// @dev Set completed migration id.
    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    /// @dev Set copmleted migration on new Migrations contract.
    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }
}
