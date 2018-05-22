import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Tribe } from '../tribe/tribe';
import { Task, WorkHistory } from './task';
import { TASKS } from '../shared/mocks/mock-tasks';
import { User } from '../user/user';
import { USERS } from '../shared/mocks/mock-users';

@Injectable()
export class TaskService {
  public workHistoryChange: Subject<WorkHistory> = new Subject<WorkHistory>();

  constructor() { }

  claimTask(task: Task, user: User){
    task.state = 'claimed';    
    task.claimedBy = user || USERS[0];
  }

  addWork(user: User, comment: string){
    let workHistory: WorkHistory = {
      date: new Date(),
      comment: comment,
      user: user || USERS[0],
    }
    this.workHistoryChange.next(workHistory); 
  }

  submitTask(task: Task, user: User){
    task.state = 'pending';    
    task.submittedBy = user || USERS[0];    
  }

  quitTask(task: Task){
    task.state = 'open';
    task.claimedBy = null;    
  }

  getTasks(tribe: Tribe): Observable<Task[]> {
    return of(TASKS.filter(project => project.tribe === tribe));
  }

  getTask(tribeId: string, taskId: string): Observable<Task> {
    return of(TASKS
      .find(task => task.tribe.address === tribeId && task.slug === taskId));
  }

}