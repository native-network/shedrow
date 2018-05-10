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

  constructor(
    private tribeService: TribeService,
  ) { }

  ngOnInit() {
    this.getTribes();
  }

  getTribes(): void {
    this.tribeService.getTribes()
      .subscribe(tribes => this.tribes = tribes);
  }

}
