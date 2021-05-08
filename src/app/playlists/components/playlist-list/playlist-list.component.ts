import { Component, OnInit } from '@angular/core';
import { IPlaylist } from 'src/app/core/model/playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  selectedId = "234"

  playlists: IPlaylist[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  trackFn(index: number, item: any){
    return item.id;
  }

  selectItem(id: string){
    this.selectedId = id
  }

}
