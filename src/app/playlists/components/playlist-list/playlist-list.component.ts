import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  playlists = [{
    id: '123',
    name: 'My Playlist 1',
    public: true,
    description: 'Long descr...'
  },
  {
    id: '456',
    name: 'My Playlist 2',
    public: true,
    description: 'Long descr...'
  },
  {
    id: '789',
    name: 'My Playlist 3',
    public: true,
    description: 'Long descr...'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
