import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistEditFormComponent } from './components/playlist-edit-form/playlist-edit-form.component';
import { PlaylistListItemComponent } from './components/playlist-list-item/playlist-list-item.component';


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent,
    PlaylistEditFormComponent,
    PlaylistListItemComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SharedModule
  ]
})
export class PlaylistsModule { }
