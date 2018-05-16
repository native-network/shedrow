import { Injectable } from '@angular/core';
import { VOTES } from '../shared/mocks/mock-votes';
import { Tribe } from '../tribe/tribe';
import { Vote, SubmittedVote } from './vote';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { User } from '../user/user';

@Injectable()
export class VoteService {
  constructor() { }

  getVotes(tribe: Tribe): Observable<Vote[]> {
    return of(VOTES.filter(project => project.tribe === tribe));
  }

  getVote(tribeId: string, voteId: string): Observable<Vote> {
    return of(VOTES
      .find(vote => vote.tribe.address === tribeId && vote.slug === voteId));
  }

  castVote(slug: string, option: string, user: User): void {
    const vote = VOTES.find(vote => vote.slug === slug);
    const submitedVote: SubmittedVote = {
      user: user, option: option
    }
    vote.voted.push(submitedVote)
  }

  hasVoted(voteId: string, user: User) : boolean {
    const vote = VOTES.find(vote => vote.slug === voteId);
    return vote.voted.filter((item) => item.user === user ).length > 0;
  }

  getResults(voteId: string) {
    const vote = VOTES.find(vote => vote.slug === voteId);
    return vote.voted
  }

}
