import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vote, SubmittedVote } from '../vote';
import { Location } from '@angular/common';
import { VoteService } from '../vote.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.scss']
})
export class VoteDetailComponent implements OnInit {

  vote: Vote;
  results: SubmittedVote[] = [];

  constructor(
    private route: ActivatedRoute,
    private voteService: VoteService,
    private location: Location,
    private userService: UserService
  ) {
    this.voteService.resultsChange.subscribe(value => {
      console.log('listened ', value);
      this.vote = value;
      this.results = value.voted;
    });
   }

  getVote(): void {
    const tribeId = this.route.snapshot.paramMap.get('tribeId');
    const voteId = this.route.snapshot.paramMap.get('voteId');
    this.voteService.getVote(tribeId, voteId)
      .subscribe(vote => this.vote = vote);
  }

  castVote(option: string): void {    
    this.voteService.castVote(this.vote, option, this.userService.currentUser);
  }

  getResults(){
    let resultCounts = [];
    for( let opt of this.vote.options) {
      let count = this.results.filter((item) => item.option === opt).length
      resultCounts.push({option: opt, count: count})
    }
    return resultCounts;
  }

  hasVoted(){
    return this.voteService.hasVoted(this.vote, this.userService.currentUser);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getVote();
    this.getResults();
  }
}
