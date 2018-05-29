import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TribeService } from '../../../tribe/tribe.service';
import { Tribe } from '../../../tribe/tribe';

import { Project } from '../../../project/project';
import { ProjectService } from '../../../project/project.service';



@Component({
  selector: 'app-allthings',
  templateUrl: './allthings.component.html',
  styleUrls: ['./allthings.component.scss']
})
export class AllthingsComponent implements OnInit {


  // table
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }


}

export interface Element {
name: string;
position: number;
weight: number;
symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
];
