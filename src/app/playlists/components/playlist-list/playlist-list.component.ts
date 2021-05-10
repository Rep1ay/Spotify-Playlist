import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlaylist } from 'src/app/core/model/playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  @Input() selectedId?: IPlaylist['id'];

  @Input ('items') playlists: IPlaylist[] = [];

  @Output() selectedIdChange = new EventEmitter<IPlaylist['id']>();

  constructor() { }

  ngOnInit(): void {
  }

  trackFn(index: number, item: any){
    return item.id;
  }

  selectItem(id: string){
    this.selectedId = id;
    this.selectedIdChange.emit(id)
  }

}
