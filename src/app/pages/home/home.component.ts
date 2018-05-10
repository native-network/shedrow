import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninDialogComponent } from '../../shared/signin-dialog/signin-dialog.component';
import { ConverterDialogComponent } from '../../shared/converter-dialog/converter-dialog.component';

import { TribeService } from '../../tribe/tribe.service';
import { Tribe } from '../../tribe/tribe';
import { AuthService } from '../../util/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService , 
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  isAuthenticated(): Boolean {
    return this.authService.isAuthenticated();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SigninDialogComponent, {
      maxWidth: 'none',
      width: '100vw',
      height: '100vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openConverter(): void {
    let dialogRef = this.dialog.open(ConverterDialogComponent, {
      maxWidth: 'none',
      width: '100vw',
      height: '100vh',
      data: {from: 'ETH', to: 'NT', ratio: 100 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
