import { Component, OnInit } from '@angular/core';
import { ConverterDialogComponent } from '../converter-dialog/converter-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-buy-native-button',
  templateUrl: './buy-native-button.component.html',
  styleUrls: ['./buy-native-button.component.scss']
})
export class BuyNativeButtonComponent {

  constructor(public dialog: MatDialog) { }

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
