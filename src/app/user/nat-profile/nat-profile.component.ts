import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { AuthService } from '../../util/auth.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SigninDialogComponent } from '../../shared/signin-dialog/signin-dialog.component';
import { VerifyDialogComponent } from '../../shared/verify-dialog/verify-dialog.component';
import { ConverterDialogComponent } from '../../shared/converter-dialog/converter-dialog.component'; 

@Component({
  selector: 'app-nat-profile',
  templateUrl: './nat-profile.component.html',
  styleUrls: ['./nat-profile.component.scss']
})
export class NatProfileComponent implements OnInit {
    // tooltip
    position = 'before';
    // web3
    accounts: string[];
    model = {
      amount: 5,
      receiver: '',
      balance: 0,
      account: ''
    };

    //blockies
    blockiesOptions: Object = { // All options are optional
      //seed: 'random', // seed used to generate icon data, default: random
      //color: '#dfe', // to manually specify the icon color, default: random
      //bgcolor: '#aaa', // choose a different background color, default: random
      size: 8, // width/height of the icon in blocks, default: 8
      scale: 5, // width/height of each block in pixels, default: 4
      spotcolor: '#000' // each pixel has a 13% chance of being of a third color,
      // default: random. Set to -1 to disable it. These "spots" create structures
      // that look like eyes, mouths and noses.
    }

    //user
    user: User

    constructor(
      private userService: UserService,
      private web3Service: Web3Service,
      private authService: AuthService,
      private matSnackBar: MatSnackBar,    
      public dialog: MatDialog
    ) { 
      
      this.userService.currentUserChange.subscribe(value => {
        this.user = userService.currentUser;
        this.blockiesOptions['seed'] = this.user.id.toLowerCase();
      });
    }

    getEthBalance(){
      return this.userService.tokenBalance('ETH');
    }

    connect() {
      if(this.web3Service.accounts) {
        this.authService.authenticate(this.web3Service.accounts[0])
      } else {
        this.openWalletDialog();
      }
    }

    openVerifyDialog(): void {
      let dialogRef = this.dialog.open(VerifyDialogComponent, {
        maxWidth: 'none',
        width: '100vw',
        height: '100vh',
        data: { user: this.user },

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);

      });
    }

    openWalletDialog(): void {
      let dialogRef = this.dialog.open(SigninDialogComponent, {
        maxWidth: 'none',
        width: '100vw',
        height: '100vh',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        
        if (result === 'connect') {
          this.matSnackBar.open('not signed into a web3 wallet', null, {duration: 3000})
         };
      });
    }


    ngOnInit() {
    }

}
