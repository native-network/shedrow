import {NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { VoteDetailComponent } from './vote-detail/vote-detail.component';
import { VoteCardComponent } from './vote-card/vote-card.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { VoteService } from './vote.service';


@NgModule({
  imports: [SharedModule],
  declarations: [VoteDetailComponent, VoteCardComponent, VoteListComponent],
  exports: [VoteListComponent],
  providers: [VoteService],
})
export class VoteModule {
}