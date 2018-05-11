import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Tribe } from '../../tribe/tribe';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  filterState: string ='idea'
  result: any[]

  constructor(private projectService: ProjectService) { }
  @Input() tribe: Tribe;
  projects: Project[];

  ngOnInit() {
    this.getProject(this.tribe);
  }

  getProject(tribe: Tribe): void {
    this.projectService.getProjects(tribe)
      .subscribe(projects => this.projects = projects);
  }

}
