pragma solidity ^0.4.21;


/// @title Interface for Ballot.
interface BallotInterface {
    event Vote(address voter, bool yea);
    event VoterAdded(address voter);

    /// @dev Let `msg.sender` vote in support of this ballot.
    function vote(bool support) external;
    /// @dev Add voter at `voter`.
    function addVoter(address voter) external;
    /// @dev Return true if ballot expired.
    function isExpired() external view returns (bool);
    /// @dev Return true if ballot is closed.
    function isClosed() external view returns (bool);
}
