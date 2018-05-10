import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const tribeId = this.route.snapshot.paramMap.get('tribeId');
    const projectId = this.route.snapshot.paramMap.get('projectId');
    this.projectService.getProject(tribeId, projectId)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

}
