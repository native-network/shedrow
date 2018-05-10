import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaddockModule } from './paddock/paddock.module';
import { GlobalModule } from './global/global.module';
import { UserModule } from './user/user.module';
import { PagesModule } from './pages/pages.module';
import { TribeModule } from './tribe/tribe.module';
import { ProjectModule } from './project/project.module';
import { HttpClientModule } from '@angular/common/http';
import { Web3Service } from './util/web3.service';
import { AuthService } from './util/auth.service';
import { VoteModule } from './vote/vote.module';
import { BancorService } from './util/bancor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,    
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    
    PaddockModule,
    GlobalModule,
    UserModule,
    PagesModule,
    TribeModule,
    ProjectModule,
    VoteModule,
  ],
  providers: [AuthService, Web3Service, BancorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
