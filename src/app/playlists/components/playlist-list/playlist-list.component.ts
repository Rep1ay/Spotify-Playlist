import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {


  playlists = [
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

  trackFn(index: number, item: any){
    return item.id;
  }

}
