import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SharedModule
  ]
})
export class PlaylistsModule { }
