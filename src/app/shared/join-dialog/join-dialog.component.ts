import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Tribe } from '../../tribe/tribe';
import { TribeService } from '../../tribe/tribe.service';

@Component({
  selector: 'app-join-dialog',
  templateUrl: './join-dialog.component.html',
  styleUrls: ['./join-dialog.component.scss']
})
export class JoinDialogComponent {

  constructor(
    private tribeService: TribeService,
    public dialogRef: MatDialogRef<JoinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  joinTribe(tribe: Tribe): void {
    this.tribeService.joinTribe(tribe);
  }
  
  isMember(tribe: Tribe): boolean {
    return this.tribeService.isMember(tribe);
  }

}
