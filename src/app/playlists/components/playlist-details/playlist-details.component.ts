import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlaylist } from 'src/app/core/model/playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistDetailsComponent implements OnInit {

  @Input() playlist!: IPlaylist;

  @Output() edit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    if(!this.playlist){
      throw new Error('No playlist')
    }
  }

  canvelClicked(){
    this.edit.emit();
  }

  save(){
    
  }

}
