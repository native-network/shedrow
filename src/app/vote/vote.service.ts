import { Injectable } from '@angular/core';
import { VOTES } from '../shared/mocks/mock-votes';
import { Tribe } from '../tribe/tribe';
import { Vote, SubmittedVote } from './vote';

import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { User } from '../user/user';

@Injectable()
export class VoteService {
  public resultsChange: Subject<Vote> = new Subject<Vote>();

  constructor() { }

  getVotes(tribe: Tribe): Observable<Vote[]> {
    return of(VOTES.filter(project => project.tribe === tribe));
  }

  getVote(tribeId: string, voteId: string): Observable<Vote> {
    return of(VOTES
      .find(vote => vote.tribe.address === tribeId && vote.slug === voteId));
  }

  castVote(vote: Vote, option: string, user: User): void {
    const submitedVote: SubmittedVote = {
      user: user, option: option
    }
    vote.voted.push(submitedVote)
    console.log('cast', vote);
    this.resultsChange.next(vote);
  }

  hasVoted(vote: Vote, user: User) : boolean {
    return vote.voted.filter((item) => item.user === user ).length > 0;
  }

  getResults(vote: Vote) {
    return vote.voted
  }

}
