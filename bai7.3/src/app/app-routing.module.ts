import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {YoutobePlaylistComponent} from "./youtobe-playlist/youtobe-playlist.component";

const routes: Routes = [{
  path : 'youtobe',
  component: YoutobePlaylistComponent,
  children:[{
    path:':id',
    component:YoutubePlayerComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
