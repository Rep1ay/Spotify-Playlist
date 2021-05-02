import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicSearchRoutingModule } from './music-search-routing.module';
import { MusicSearchComponent } from './music-search.component';


@NgModule({
  declarations: [
    MusicSearchComponent
  ],
  imports: [
    CommonModule,
    MusicSearchRoutingModule
  ]
})
export class MusicSearchModule { }
