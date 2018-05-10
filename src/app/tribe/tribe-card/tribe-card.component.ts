import { Component, OnInit, Input } from '@angular/core';
import { Tribe } from '../tribe';
import { ActivatedRoute } from '@angular/router';
import { TribeService } from '../tribe.service';
import { MatDialog } from '@angular/material';
import { ConverterDialogComponent } from '../../shared/converter-dialog/converter-dialog.component';

@Component({
  selector: 'app-tribe-card',
  templateUrl: './tribe-card.component.html',
  styleUrls: ['./tribe-card.component.scss']
})
export class TribeCardComponent implements OnInit {
  @Input() tribe: Tribe;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  getBlocky(seed): Object {
    let blocky: Object = { // All options are optional
      seed: 'randstring', // seed used to generate icon data, default: random
      color: '#dfe', // to manually specify the icon color, default: random
      //bgcolor: '#aaa', // choose a different background color, default: random
      size: 8, // width/height of the icon in blocks, default: 8
      scale: 3, // width/height of each block in pixels, default: 4
      spotcolor: '#000' // each pixel has a 13% chance of being of a third color,
      // default: random. Set to -1 to disable it. These "spots" create structures
      // that look like eyes, mouths and noses.
    }
    blocky['seed'] = seed;

    return blocky
  }

  openBuy(): void {
    let dialogRef = this.dialog.open(ConverterDialogComponent, {
      maxWidth: 'none',
      width: '100vw',
      height: '100vh',
      data: {from: 'NT', to: 'TT', ratio: 1000 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
