import {NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TribeModule } from '../tribe/tribe.module';


@NgModule({
  imports: [
    SharedModule,
    TribeModule],
  declarations: [HomeComponent],
  exports: []
})
export class PagesModule {
}
