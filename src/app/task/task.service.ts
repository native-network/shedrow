import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Tribe } from '../tribe/tribe';
import { Task } from './task';
import { TASKS } from '../shared/mocks/mock-tasks';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks(tribe: Tribe): Observable<Task[]> {
    return of(TASKS.filter(project => project.tribe === tribe));
  }

  getTask(tribeId: string, taskId: string): Observable<Task> {
    return of(TASKS
      .find(task => task.tribe.address === tribeId && task.slug === taskId));
  }

}