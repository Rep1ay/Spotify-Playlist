import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../core/model/playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  mode : 'details' | 'edit' = 'details';

  playlists: IPlaylist[] = [
    {
      id: '123',
      name: 'My playlist',
      public: true,
      description: 'Longer description ...'
    },
    {
      id: '234',
      name: 'My playlist 234',
      public: true,
      description: 'Longer description ...'
    },
    {
      id: '345',
      name: 'My playlist 345',
      public: true,
      description: 'Longer description ...'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
