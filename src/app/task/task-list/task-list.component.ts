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
  filterState: string = 'open';

  constructor(private taskService: TaskService) { }
  @Input() tribe: Tribe;
  tasks: Task[];

  ngOnInit() {
    this.getVote(this.tribe);
  }

  getVote(tribe: Tribe): void {
    this.taskService.getTasks(tribe)
      .subscribe(votes => this.tasks = votes);
  }

}
