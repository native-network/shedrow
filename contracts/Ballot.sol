pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

import "./BallotInterface.sol";


/// @title Ballot contract implementing BallotInterface.
contract Ballot is BallotInterface, Ownable {
    uint256 public deadline;
    string public proposition;

    mapping(address => bool) public canVote;
    mapping(address => bool) public hasVoted;

    uint256 public yea;
    uint256 public nay;
    uint256 public voters;

    /** @dev Ballot constructor
      * @param _proposition Proposition to vote on.
      * @param _deadline UNIX timestamp until which ballot is open.
      */
    function Ballot(string _proposition, uint256 _deadline) public {
        proposition = _proposition;
        deadline = _deadline;
    }

    /// @dev Return true if ballot has expired.
    function isExpired() external view returns (bool) {
        return _isExpired();
    }

    /** @dev Return true if ballot is closed
      * @dev A ballot is closed when it expires or all voters have voted.
      */
    function isClosed() external view returns (bool) {
        return _isExpired() || SafeMath.add(yea, nay) == voters;
    }

    /** @dev Let `msg.sender` vote for or against the proposition.
      * @param support True if `msg.sender` supports proposition.
      */
    function vote(bool support) external {
        require(canVote[msg.sender]);
        require(!hasVoted[msg.sender]);
        require(!_isExpired());

        if (support) {
            yea += 1;
        } else {
            nay += 1;
        }

        hasVoted[msg.sender] = true;

        emit Vote(msg.sender, support);
    }

    /// @dev Let owner add more voters.
    function addVoter(address voter) external onlyOwner {
        require(!_isExpired());
        canVote[voter] = true;
        voters += 1;

        emit VoterAdded(voter);
    }

    /// @dev Return true if deadline has been passed.
    function _isExpired() internal view returns (bool) {
        return block.timestamp >= deadline;
    }
}
