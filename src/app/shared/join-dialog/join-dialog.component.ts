import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Tribe } from '../../tribe/tribe';
import { TribeService } from '../../tribe/tribe.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-join-dialog',
  templateUrl: './join-dialog.component.html',
  styleUrls: ['./join-dialog.component.scss']
})
export class JoinDialogComponent implements OnInit {
  tribe: Tribe;

  constructor(
    private tribeService: TribeService,
    private userService: UserService,
    public dialogRef: MatDialogRef<JoinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.tribe = this.data.tribe;
  }

  joinTribe(tribe: Tribe): void {
    this.tribeService.joinTribe(tribe);
  }

  hasTT(ticker): boolean{
    const token = this.userService.currentUser.tribeTokens
      .find((item) => item.ticker === ticker)
    return token ? token.balance >= this.tribe.configMembershipFee : false;
  }

  hasNT() : boolean{
    return !!this.userService.currentUser.ntBalance;
  }

  isMember(): boolean {
    return this.userService.currentUser ?
      (this.tribe.members.indexOf(this.userService.currentUser) > -1) : false;
  }


}
