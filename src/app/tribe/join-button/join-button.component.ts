import { Component, OnInit, Input } from '@angular/core';
import { Tribe } from '../../tribe/tribe';
import { MatDialog } from '@angular/material';
import { JoinDialogComponent } from '../../shared/join-dialog/join-dialog.component';

@Component({
  selector: 'app-join-button',
  templateUrl: './join-button.component.html',
  styleUrls: ['./join-button.component.scss']
})
export class JoinButtonComponent{
  @Input() tribe: Tribe;

  constructor(public dialog: MatDialog) { }

  openJoin(): void {
    let dialogRef = this.dialog.open(JoinDialogComponent, {
      maxWidth: 'none',
      width: '100vw',
      height: '100vh',
      data: {tribe: this.tribe}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}
