import {NgModule} from '@angular/core';

import { AllthingsComponent } from './pages/allthings/allthings.component';

import { SharedModule } from '../shared/shared.module';
import { BlockiesModule } from 'angular-blockies';
import { TribeModule } from '../tribe/tribe.module';
  
@NgModule({
  imports: [
    SharedModule,
    TribeModule],
  declarations: [AllthingsComponent],
  exports: [AllthingsComponent]
})
export class PaddockModule {
}