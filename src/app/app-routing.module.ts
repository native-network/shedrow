import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AllthingsComponent } from './paddock/pages/allthings/allthings.component';
import { HomeComponent } from './pages/home/home.component';
import { TribeDetailComponent } from './tribe/tribe-detail/tribe-detail.component';
import { TribeListComponent } from './tribe/tribe-list/tribe-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { VoteDetailComponent } from './vote/vote-detail/vote-detail.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { AuthGuardService } from './util/auth-guard.service';


const routes: Routes = [
  { path: 'paddock', component: AllthingsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tribes', 
    component: TribeListComponent,
    // canActivate: [AuthGuardService]  
  },
  { path: 'tribe/:id',
    component: TribeDetailComponent,
    // canActivate: [AuthGuardService] 
  },
  { path: 'tribe/:tribeId/project/:projectId',
    component: ProjectDetailComponent,
    // canActivate: [AuthGuardService] 
  },
  { path: 'tribe/:tribeId/vote/:voteId',
    component: VoteDetailComponent,
    // canActivate: [AuthGuardService] 
  },
  { path: 'tribe/:tribeId/task/:taskId',
    component: TaskDetailComponent,
    // canActivate: [AuthGuardService] 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
