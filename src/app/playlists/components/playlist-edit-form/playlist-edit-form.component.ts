import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlaylist } from 'src/app/core/model/playlist';

@Component({
  selector: 'app-playlist-edit-form',
  templateUrl: './playlist-edit-form.component.html',
  styleUrls: ['./playlist-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistEditFormComponent implements OnInit {


  @Input() playlist!: IPlaylist;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  ngOnInit(): void {
  }

  cancelClicked() {
    this.cancel.emit()
  }

  saveClicked() {
    this.save.emit()
  }

}
