import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playlistsMock } from './data/playlist.mock';
import { PlaylistService } from './services/playlist/playlist.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: 'PLAYLISTS_DATA',
    useValue: []
  },
  {
    provide: PlaylistService
  }
]
})
export class CoreModule { }
