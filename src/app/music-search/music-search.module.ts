import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicSearchRoutingModule } from './music-search-routing.module';
import { MusicSearchComponent } from './music-search.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumCardComponent } from './components/album-card/album-card.component';


@NgModule({
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    SearchResultsComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    MusicSearchRoutingModule,
    SharedModule
  ]
})
export class MusicSearchModule { }
