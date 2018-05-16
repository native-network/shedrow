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

  joinTribe(): void {
    this.tribeService.joinTribe(this.tribe);
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
