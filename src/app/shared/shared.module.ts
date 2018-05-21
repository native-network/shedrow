import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from "@angular/flex-layout";

import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatTableModule,
  MatGridListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';

import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { SigninDialogComponent } from './signin-dialog/signin-dialog.component';
import { ConverterDialogComponent } from './converter-dialog/converter-dialog.component';
import { BancorInfoComponent } from './bancor-info/bancor-info.component';
import { VerifyDialogComponent } from './verify-dialog/verify-dialog.component';
import { InStatePipe } from './in-state.pipe';
import { JoinDialogComponent } from './join-dialog/join-dialog.component';
import { BuyNativeButtonComponent } from './buy-native-button/buy-native-button.component';
import { TokenConverterComponent } from './token-converter/token-converter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,   
    RouterModule,

    FlexLayoutModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  entryComponents: [
    ExampleDialogComponent,
    SigninDialogComponent,
    ConverterDialogComponent,
    VerifyDialogComponent,
    JoinDialogComponent,  
  ],
  declarations: [
    ExampleDialogComponent,
    SigninDialogComponent,
    ConverterDialogComponent,
    BancorInfoComponent,
    VerifyDialogComponent,
    InStatePipe,
    JoinDialogComponent,
    BuyNativeButtonComponent,
    TokenConverterComponent,
  ],
  exports: [
    CommonModule,   
    FormsModule,
    RouterModule,

    FlexLayoutModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,

    BancorInfoComponent,
    BuyNativeButtonComponent,
    TokenConverterComponent,

    InStatePipe,
    
  ],
  providers: [
  ]
})
export class SharedModule {
}
