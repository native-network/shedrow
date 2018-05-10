import {NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NatProfileComponent } from './nat-profile/nat-profile.component';

import { BlockiesModule } from 'angular-blockies';
import { UserService } from './user.service';

  
@NgModule({
  imports: [SharedModule, BlockiesModule],
  declarations: [NatProfileComponent],
  exports: [NatProfileComponent],
  providers: [UserService],
})
export class UserModule {
}