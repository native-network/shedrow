import {NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TribeService } from './tribe.service';
import { TribeCardComponent } from './tribe-card/tribe-card.component';
import { TribeDetailComponent } from './tribe-detail/tribe-detail.component';
import { BlockiesModule } from 'angular-blockies';
import { TribeListComponent } from './tribe-list/tribe-list.component';
import { ProjectModule } from '../project/project.module';
import { VoteModule } from '../vote/vote.module';
import { TaskModule } from '../task/task.module';

  
@NgModule({
  imports: [SharedModule, BlockiesModule, ProjectModule, VoteModule, TaskModule],
  declarations: [TribeCardComponent, TribeDetailComponent, TribeListComponent],
  exports: [TribeCardComponent, TribeListComponent],
  providers: [TribeService],
})
export class TribeModule {
}