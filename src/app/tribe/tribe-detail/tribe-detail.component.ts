import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TribeService } from '../tribe.service';
import { Tribe } from '../tribe';
import { Location } from '@angular/common';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-tribe-detail',
  templateUrl: './tribe-detail.component.html',
  styleUrls: ['./tribe-detail.component.scss']
})
export class TribeDetailComponent implements OnInit {
  tribe: Tribe;

  constructor(
    private route: ActivatedRoute,
    private tribeService: TribeService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTribe();
  }

  getTribe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tribeService.getTribe(id)
      .subscribe(tribe => this.tribe = tribe);
  }

  goBack(): void {
    this.location.back();
  }

  getBlocky(seed): Object {
    let blocky: Object = { // All options are optional
      seed: 'randstring', // seed used to generate icon data, default: random
      color: '#dfe', // to manually specify the icon color, default: random
      //bgcolor: '#aaa', // choose a different background color, default: random
      size: 8, // width/height of the icon in blocks, default: 8
      scale: 3, // width/height of each block in pixels, default: 4
      spotcolor: '#000' // each pixel has a 13% chance of being of a third color,
      // default: random. Set to -1 to disable it. These "spots" create structures
      // that look like eyes, mouths and noses.
    }
    blocky['seed'] = seed;

    return blocky
  }

  hasTT(): boolean{
    return this.userService.hasTT(this.tribe);
  }

  hasNT(amount: number = 0) : boolean{
    return this.userService.hasNT(amount);
  }

  isMember(): boolean {
    return this.tribeService.isMember(this.tribe);
  }


}
