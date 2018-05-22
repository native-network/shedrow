import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vote, SubmittedVote } from '../vote';
import { Location } from '@angular/common';
import { VoteService } from '../vote.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.scss']
})
export class VoteDetailComponent implements OnInit {

  vote: Vote;
  results: SubmittedVote[] = [];
  usersVoted: User[] = [];
  resultCounts = [];

  constructor(
    private route: ActivatedRoute,
    private voteService: VoteService,
    private location: Location,
    private userService: UserService
  ) {
    this.voteService.resultsChange.subscribe(value => {
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
    this.getResults();
  }

  getResults(){
    this.resultCounts = [];
    for( let opt of this.vote.options) {
      let count = this.results.filter((item) => item.option === opt).length
      this.resultCounts.push({option: opt, count: count})
    }
  }

  getUsersVoted(): User[] {
    let voted = this.vote.voted.map(item => item.user );
    // get unique voters
    return Array.from(new Set(voted))
  }

  hasVotedOn(option: string): boolean{
    return this.voteService.hasVotedOn(this.vote, option, this.userService.currentUser);
  }

  hasVoted(): boolean{
    return this.voteService.hasVoted(this.vote, this.userService.currentUser);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getVote();
    this.getResults();
    console.log(this.getUsersVoted());

  }
}
