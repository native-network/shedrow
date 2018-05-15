import {NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectService } from './project.service';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { QuorumPipe } from './quorum.pipe';


@NgModule({
  imports: [SharedModule],
  declarations: [ProjectDetailComponent, ProjectCardComponent, ProjectListComponent, QuorumPipe],
  exports: [ProjectListComponent],
  providers: [ProjectService],
})
export class ProjectModule {
}