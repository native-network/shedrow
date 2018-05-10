import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTask();
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

}
