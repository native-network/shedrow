import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ExampleDialogComponent } from '../../../shared/example-dialog/example-dialog.component';
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

  // temp file
  file = { name: 'image_1.jpg', url: 'https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg' }
  // show/hide
  showThing:boolean = false;

  // dialog
  animal: string;
  name: string;

  // table
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  // project bar
  color = 'accent';
  mode = 'determinate';
  value = 65;
  bufferValue = 75;

  //projects
  projects: Project[]


  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    // this.getProjects();
  }

  // getProjects(): void {
  //   this.projects = this.projectService.getProjects();
  // }

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      data: { name: this.name, animal: this.animal },
      panelClass: 'party'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(this.animal);
      
    });
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
