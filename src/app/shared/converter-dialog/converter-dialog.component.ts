import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserService } from '../../user/user.service';
import { TribeToken } from '../../user/user';

@Component({
  selector: 'app-converter-dialog',
  templateUrl: './converter-dialog.component.html',
  styleUrls: ['./converter-dialog.component.scss']
})
export class ConverterDialogComponent implements OnInit{
  fromAmount: number = 0;
  toAmount: number = 0;
  ratio: number = 100;

  constructor(
    public dialogRef: MatDialogRef<ConverterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService) { }

    onClose(): void {
      this.dialogRef.close();
    }

    addTribeToken(ticker: string): TribeToken {
      const newToken = {ticker: ticker, balance: 0}      
      const token = this.userService.currentUser.tribeTokens.find((item) => item.ticker === ticker)
      if(!token){
        this.userService.currentUser.tribeTokens.push(newToken)
      }

      return token || newToken;
    }

    convert(){
      let tribeToken: TribeToken;
      if( this.data.from === 'ETH') {
        this.userService.currentUser.ethBalance = this.userService.currentUser.ethBalance - this.fromAmount;
        this.userService.currentUser.ntBalance = this.userService.currentUser.ntBalance + (this.fromAmount * this.ratio);
      } else {
        tribeToken = this.addTribeToken(this.data.to);
        this.userService.currentUser.ntBalance = this.userService.currentUser.ntBalance - this.fromAmount;
        tribeToken.balance = tribeToken.balance + (this.fromAmount * this.ratio);        
      }
      console.log(this.userService.currentUser);
      
      
      this.dialogRef.close();
    }

    ngOnInit() {
      
      this.ratio = this.data.ratio || 1;
    }
    

}
