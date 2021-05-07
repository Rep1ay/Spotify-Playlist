import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  playlist = {
    id:'123',
    name:'My playlist',
    public: true,
    description: 'Longer description ...'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
