import {NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NatProfileComponent } from './nat-profile/nat-profile.component';

import { BlockiesModule } from 'angular-blockies';
import { UserService } from './user.service';
import { TokenBalancesComponent } from './token-balances/token-balances.component';

  
@NgModule({
  imports: [SharedModule, BlockiesModule],
  declarations: [NatProfileComponent, TokenBalancesComponent],
  exports: [NatProfileComponent, TokenBalancesComponent],
  providers: [UserService],
})
export class UserModule {
}