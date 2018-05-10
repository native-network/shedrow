import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserService } from '../../user/user.service';

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

    convert(){
      
      if( this.data.from === 'ETH') {
        this.userService.currentUser.ethBalance = this.userService.currentUser.ethBalance - this.fromAmount;
        this.userService.currentUser.ntBalance = this.userService.currentUser.ntBalance + (this.fromAmount * this.ratio);
      } else {
        this.userService.currentUser.ntBalance = this.userService.currentUser.ntBalance - this.fromAmount;
        this.userService.currentUser.ttBalance = this.userService.currentUser.ttBalance + (this.fromAmount * this.ratio);
      }
      
      this.dialogRef.close();
    }

    ngOnInit() {
      this.ratio = this.data.ratio || 1;
    }
    

}
