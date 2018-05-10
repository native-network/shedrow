import {NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskService } from './task.service';

@NgModule({
  imports: [SharedModule],
  declarations: [TaskCardComponent, TaskListComponent, TaskDetailComponent],
  exports: [TaskListComponent],
  providers: [TaskService],
})
export class TaskModule {
}