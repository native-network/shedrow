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
