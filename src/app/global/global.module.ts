import {NgModule} from '@angular/core';
import { NatNavbarComponent } from './nat-navbar/nat-navbar.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
  
@NgModule({
  imports: [
    SharedModule,
    UserModule,
  ],
  declarations: [NatNavbarComponent],
  exports: [NatNavbarComponent]
})
export class GlobalModule {
}