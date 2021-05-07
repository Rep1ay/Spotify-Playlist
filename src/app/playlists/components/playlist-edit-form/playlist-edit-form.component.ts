import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-edit-form',
  templateUrl: './playlist-edit-form.component.html',
  styleUrls: ['./playlist-edit-form.component.scss']
})
export class PlaylistEditFormComponent implements OnInit {


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
