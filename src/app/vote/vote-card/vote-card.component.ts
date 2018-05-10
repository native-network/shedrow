import { Component, OnInit, Input } from '@angular/core';
import { Vote } from '../vote';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.scss']
})
export class VoteCardComponent implements OnInit {
  @Input() vote: Vote;

  constructor() { }

  ngOnInit() {
  }

}
