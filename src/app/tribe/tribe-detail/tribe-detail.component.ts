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

  hasTT(ticker){
    const token = this.userService.currentUser.tribeTokens
      .find((item) => item.ticker === ticker)
    return token ? token.balance > this.tribe.configMembershipFee : false;
  }

  hasNT() : boolean{
    return !!this.userService.currentUser.ntBalance;
  }

  isMember(): boolean {
    return this.userService.currentUser ? 
      (this.tribe.members.indexOf(this.userService.currentUser) > -1) : false;
  }
  

}
