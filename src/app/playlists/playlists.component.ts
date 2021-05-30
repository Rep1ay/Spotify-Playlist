import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../core/model/playlist';
import { PlaylistService } from '../core/services/playlist/playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  mode : 'details' | 'edit' = 'details';

  playlists: IPlaylist[] = [];

  selectedId?: IPlaylist['id'];
  selected?: IPlaylist;

  constructor(private playlistsService: PlaylistService) { }

  ngOnInit(): void {
    this.playlists = this.playlistsService.getPlaylists();
  }

  switchToEdit(){
    this.mode = 'edit';
  }

  switchToDetails(){
    this.mode = 'details';
  }

  save(draft: IPlaylist){
    this.playlistsService.savePlaylists(draft);
  }

  cancel(){
    
  }

  selectItem(id: IPlaylist['id']){
    this.selectedId = this.selectedId === id ? undefined : id;
    this.selected = this.playlists.find(item => item.id === this.selectedId);
  }
}
