import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';
import { Task } from '../task';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  comment: string;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private userService: UserService,
    private location: Location
  ) { 
    taskService.workHistoryChange.subscribe(value => {
      this.task.workHistories.push(value);
    });
  }

  getTask(): void {
    const tribeId = this.route.snapshot.paramMap.get('tribeId');
    const taskId = this.route.snapshot.paramMap.get('taskId');
    this.taskService.getTask(tribeId, taskId)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  claim(){
    this.taskService.addWork(this.userService.currentUser, "claimed");
    this.taskService.claimTask(this.task, this.userService.currentUser);
  }

  addWork(comment: string){
    this.taskService.addWork(this.userService.currentUser, comment);
    this.comment = '';
  }

  submitTask(){
    this.taskService.addWork(this.userService.currentUser, "submitted");
    this.taskService.submitTask(this.task, this.userService.currentUser);    
  }

  quitTask(){
    this.taskService.addWork(this.userService.currentUser, "quit");
    this.taskService.quitTask(this.task);    
  }

  ngOnInit() {
    this.getTask();
  }

}
