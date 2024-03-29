import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  // tooltip
  position = 'above';

  // project bar
  color = 'accent';
  mode = 'determinate';
  value = 65;
  bufferValue = 75;

  constructor() { }

  ngOnInit() {

  }

  getQuorum(){
    let tribe = this.project.tribe
    return Math.ceil((tribe.members.length * tribe.configQuorum) / 100)
  }

}
