import { Inject, Injectable } from '@angular/core';
import { playlistsMock } from '../../data/playlist.mock';
import { IPlaylist, IPlaylistsSource } from '../../model/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService implements IPlaylistsSource{

  playlists: IPlaylist[] = playlistsMock

  constructor() {   }

  getPlaylists(): IPlaylist[]{
    return this.playlists;
  }

  savePlaylists(draft: IPlaylist){
    debugger
    const playlists = [...this.playlists];

    const index = playlists.findIndex(p => p.id == draft.id);

    if(index !== -1){
      playlists[index] = draft
    }
  }
}
