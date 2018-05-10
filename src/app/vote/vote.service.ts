import { Injectable } from '@angular/core';
import { VOTES } from '../shared/mocks/mock-votes';
import { Tribe } from '../tribe/tribe';
import { Vote } from './vote';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

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

}
