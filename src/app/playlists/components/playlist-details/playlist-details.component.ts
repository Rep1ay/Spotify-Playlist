import { Component, Input, OnInit } from '@angular/core';
import { IPlaylist } from 'src/app/core/model/playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input() playlist: IPlaylist = {
    id:'123',
    name:'My playlist',
    public: true,
    description: 'Longer description ...'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
