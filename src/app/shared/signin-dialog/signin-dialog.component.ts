import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { Web3Service } from '../../util/web3.service';
import { AuthService } from '../../util/auth.service';

@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.scss']
})
export class SigninDialogComponent{

  constructor(private web3Service: Web3Service,
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SigninDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    connects: string = 'connect';


    onClose(): void {
      this.dialogRef.close();
    }

    connect() {
      if(this.web3Service.accounts) {
        this.authService.authenticate(this.web3Service.accounts[0])
        this.dialogRef.close();
        
      } else {
        this.matSnackBar.open('not signed into a web3 wallet', null, {duration: 3000});
      }
    }

}
