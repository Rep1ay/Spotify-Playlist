import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { SharedModule } from '../shared/shared.module';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistListItemComponent } from './components/playlist-list-item/playlist-list-item.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistEditFormComponent } from './components/playlist-edit-form/playlist-edit-form.component';


@NgModule({
  declarations: [PlaylistsComponent, PlaylistListComponent, PlaylistListItemComponent, PlaylistDetailsComponent, PlaylistEditFormComponent],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SharedModule
  ]
})
export class PlaylistsModule { }
