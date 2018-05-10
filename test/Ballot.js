const assertRejected = require("assert-rejected");
const testHelper = require("truffle-test-helpers");
// const utils = require("web3-utils");

const Ballot = artifacts.require("contracts/Ballot.sol");

contract("Ballot", accounts => {
  const voterA = accounts[0];
  const voterB = accounts[1];
  const voterC = accounts[2];
  // const voterAOptions = {from: voterA};
  const voterBOptions = {from: voterB};
  const voterCOptions = {from: voterC};

  let ballot;
  let deadline;
  let deadlineAfter;

  beforeEach(async () => {
    deadline = testHelper.latestTime() + testHelper.duration.weeks(1);
    deadlineAfter = deadline + testHelper.duration.hours(1);
    ballot = await Ballot.new(
      "more decentralization",
      deadline,
    );
    await ballot.addVoter(voterA);
    await ballot.addVoter(voterB);
  });

  it("not everyone can vote", async () => {
    await assertRejected(ballot.vote(true, voterC));
  });

  describe("before deadline", () => {
    it("is not expired", async () => {
      assert.isFalse(await ballot.isExpired());
    });

    it("is not closed", async () => {
      assert.isFalse(await ballot.isClosed());
    });

    it("can accept new voters", async () => {
      await ballot.addVoter(voterC);
      await ballot.vote(true, voterCOptions);
    });

    it("accepts votes", async () => {
      await ballot.vote(true);
    });


    describe("A voted", () => {
      beforeEach(async () => {
        await ballot.vote(true);
      });

      it("won't let A vote again", async() => {
        await assertRejected(ballot.vote(true));
      });

      it("lets B vote", async () => {
        await ballot.vote(true, voterBOptions);
      });
    });

    describe("A and B voted", () => {
      beforeEach(async () => {
        await ballot.vote(true);
        await ballot.vote(false, voterBOptions);
      });

      it("is closed", async () => {
        assert.isTrue(await ballot.isClosed());
      });
    });
  });

  describe("after deadline", () => {
    beforeEach(async () => {
      await testHelper.increaseTimeTo(deadlineAfter);
    });

    it("won't accept voters", async () => {
      await assertRejected(ballot.addVoter(accounts[2]));
    });

    it("won't accept votes", async () => {
      await assertRejected(ballot.vote(true));
    });
  });
});
