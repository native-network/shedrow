import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninDialogComponent } from '../../shared/signin-dialog/signin-dialog.component';
import { ConverterDialogComponent } from '../../shared/converter-dialog/converter-dialog.component';

import { TribeService } from '../../tribe/tribe.service';
import { Tribe } from '../../tribe/tribe';
import { AuthService } from '../../util/auth.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { Web3Service } from '../../util/web3.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService, 
    private userService: UserService,
    private web3Service: Web3Service,
    public dialog: MatDialog) {
      this.userService.currentUserChange.subscribe(value => {
        this.user = userService.currentUser;
      });
     }

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

  connect() {
    if(this.web3Service.accounts) {
      this.authService.authenticate(this.web3Service.accounts[0])
    } else {
      this.openDialog();
    }

  }

}
