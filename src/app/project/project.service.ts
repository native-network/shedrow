import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../shared/mocks/mock-projects';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Tribe } from '../tribe/tribe';
import { User } from '../user/user';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(tribe: Tribe): Observable<Project[]> {
    return of(PROJECTS.filter(project => project.tribe === tribe));
  }

  getProject(tribeId: string, projectId: string): Observable<Project> {
    return of(PROJECTS
      .find(project => project.tribe.address === tribeId && project.slug === projectId));
  }

  vote(projectId: string, user: User){
    const proj = PROJECTS
      .find(project => project.slug === projectId);
      proj.supported.push(user);
      proj.state = 'supported';
  }
  
}
