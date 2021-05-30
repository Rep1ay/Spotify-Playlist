import { EventEmitter, Inject, Injectable } from '@angular/core';
import { playlistsMock } from '../../data/playlist.mock';
import { IPlaylist, IPlaylistsSource } from '../../model/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService implements IPlaylistsSource{

  playlistChage = new EventEmitter<IPlaylist[]>();

  playlists: IPlaylist[] = playlistsMock;

  constructor() {}

  getPlaylists(): IPlaylist[]{
    return this.playlists;
  }

  savePlaylists(draft: IPlaylist){
      this.playlists = this.playlists.map(p => p.id === draft.id ? draft : p);
      this.playlistChage.emit(this.playlists);
  }
}
