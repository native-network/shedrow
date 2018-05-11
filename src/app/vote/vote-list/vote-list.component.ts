import { Component, OnInit, Input } from '@angular/core';
import { Tribe } from '../../tribe/tribe';
import { Vote } from '../vote';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.scss']
})
export class VoteListComponent implements OnInit {
  filterState: string = 'open';

  constructor(private voteService: VoteService) { }
  @Input() tribe: Tribe;
  votes: Vote[];

  ngOnInit() {
    this.getVote(this.tribe);
  }

  getVote(tribe: Tribe): void {
    this.voteService.getVotes(tribe)
      .subscribe(votes => this.votes = votes);
  }


}
