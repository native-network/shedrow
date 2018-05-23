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
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onClose(): void {
      this.dialogRef.close();
    }

    ngOnInit() {

      this.ratio = this.data.ratio || 1;
    }

    hasNT(amount: number = 0) : boolean{
      return this.userService.hasNT(amount);
    }

    onConvert(toAmount: number){
      console.log('Conversion Success');
    }
}
