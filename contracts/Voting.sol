//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Voting is Ownable {

    struct Candidate {
        string name;
        uint256 votingCount;
    }
    Candidate[] private candidates;

    // this is to check whether the voter has already voted or not
    mapping(address => bool) voted;

    constructor() Ownable(msg.sender) {}

    function newCandidate(string memory _name) public onlyOwner {

        // check for existence of candidate
        Candidate memory candidate = Candidate({
            name: _name,
            votingCount: 0
        });

        candidates.push(candidate);
    }

    function vote(string memory _name) public {
        require(!voted[msg.sender] || voted[msg.sender] != false, "voted already!");

        for(uint i=0; i < candidates.length; i++) {
            if(keccak256(abi.encodePacked(candidates[i].name)) == keccak256(abi.encodePacked(_name))) {
                candidates[i].votingCount++;
                break;
            }
        }
    }

    function getCandidates() public view returns(Candidate[] memory) {
        return candidates;
    }

    // this is for testing purpose only not for production, comment it out while deploying
    // as this lets user mark their vote to be false which in is not good
    function removePersonVote() public {
        voted[msg.sender] = false;
    }

}