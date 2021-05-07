import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// npm i @angular/flex-layout @angular/cdk
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { YesnoPipe } from './yesno/yesno.pipe';

@NgModule({
  declarations: [
    YesnoPipe
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
  ],
  exports: [
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
     MatCheckboxModule,
     FormsModule,
     YesnoPipe,
  ]
})
export class SharedModule { }
