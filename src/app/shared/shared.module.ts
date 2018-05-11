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
} from '@angular/material';

import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { SigninDialogComponent } from './signin-dialog/signin-dialog.component';
import { ConverterDialogComponent } from './converter-dialog/converter-dialog.component';
import { BancorInfoComponent } from './bancor-info/bancor-info.component';
import { VerifyDialogComponent } from './verify-dialog/verify-dialog.component';
import { InStatePipe } from './in-state.pipe';

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
  ],
  entryComponents: [
    ExampleDialogComponent,
    SigninDialogComponent,
    ConverterDialogComponent,
    VerifyDialogComponent,    
  ],
  declarations: [
    ExampleDialogComponent,
    SigninDialogComponent,
    ConverterDialogComponent,
    BancorInfoComponent,
    VerifyDialogComponent,
    InStatePipe,
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

    BancorInfoComponent,

    InStatePipe,
    
  ],
  providers: [
  ]
})
export class SharedModule {
}
