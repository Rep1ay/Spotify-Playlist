import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

import { FlexLayoutModule } from '@angular/flex-layout'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule
  ]

})
export class SharedModule { }
