import { Component, OnInit } from '@angular/core';
import { TribeService } from '../tribe.service';
import { Tribe } from '../tribe';

@Component({
  selector: 'app-tribe-list',
  templateUrl: './tribe-list.component.html',
  styleUrls: ['./tribe-list.component.scss']
})
export class TribeListComponent implements OnInit {
  tribes: Tribe[];
  rotateStatus: boolean = false;

  constructor(
    private tribeService: TribeService,
  ) {

  }

  ngOnInit() {
    this.getTribes();
  }

  flipCards() {
    this.rotateStatus = !this.rotateStatus;
  }

  getTribes(): void {
    this.tribeService.getTribes()
      .subscribe(tribes => this.tribes = tribes);
  }

}
