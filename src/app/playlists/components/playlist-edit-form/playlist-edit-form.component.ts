import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playlist-edit-form',
  templateUrl: './playlist-edit-form.component.html',
  styleUrls: ['./playlist-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistEditFormComponent implements OnInit {


  playlist = {
    id:'123',
    name:'My playlist',
    public: true,
    description: 'Longer description ...'
  }

@Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  ngOnInit(): void {
  }

  cancelClicked(){
    this.cancel.emit()
  }

  saveClicked(){
    this.save.emit()
  }

}
