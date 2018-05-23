import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { MatDialog } from '@angular/material';
import { ConverterDialogComponent } from '../../shared/converter-dialog/converter-dialog.component';
import { Tribe } from '../../tribe/tribe';
import { TribeService } from '../../tribe/tribe.service';

@Component({
  selector: 'app-token-balances',
  templateUrl: './token-balances.component.html',
  styleUrls: ['./token-balances.component.scss']
})
export class TokenBalancesComponent implements OnInit {
  @Input() user: User;
  tribe: Tribe = null;

  constructor(
    public dialog: MatDialog,
    private tribeService: TribeService) { }

  openConverter(from, to, ratio): void {

    if(to !== 'NT'){
      this.tribeService.getTribeByTicker(to)
        .subscribe(tribe => this.tribe = tribe);
    }
    
    let dialogRef = this.dialog.open(ConverterDialogComponent, {
      maxWidth: 'none',
      width: '100vw',
      height: '100vh',
      data: {tribe: this.tribe, from: from, to: to, ratio: ratio }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit() {
  }

}
