import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vote } from '../vote';
import { Location } from '@angular/common';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.scss']
})
export class VoteDetailComponent implements OnInit {

  vote: Vote;

  constructor(
    private route: ActivatedRoute,
    private voteService: VoteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getVote();
  }

  getVote(): void {
    const tribeId = this.route.snapshot.paramMap.get('tribeId');
    const voteId = this.route.snapshot.paramMap.get('voteId');
    this.voteService.getVote(tribeId, voteId)
      .subscribe(vote => this.vote = vote);
  }

  goBack(): void {
    this.location.back();
  }
}
