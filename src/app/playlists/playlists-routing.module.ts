import { NgModule } from '@angular/core';
import { PlaylistsComponent } from './playlists.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PlaylistsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
