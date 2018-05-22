import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Tribe } from '../../tribe/tribe';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  filterState: string = 'all';

  constructor(private taskService: TaskService) { }
  @Input() tribe: Tribe;
  tasks: Task[];

  ngOnInit() {
    this.getTask(this.tribe);
  }

  getTask(tribe: Tribe): void {
    this.taskService.getTasks(tribe)
      .subscribe(votes => this.tasks = votes);
  }

}
