import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'playlists',
    loadChildren: () => import('./playlists/playlists.module').then(m => m.PlaylistsModule)
  },
   {
    path: 'music',
    loadChildren: () => import('./music-search/music-search.module').then(m => m.MusicSearchModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
