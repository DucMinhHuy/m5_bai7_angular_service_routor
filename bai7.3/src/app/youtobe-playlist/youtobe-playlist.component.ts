import {Component, OnInit} from '@angular/core';
import {Song} from "../model/song";
import {SongService} from "../service/song.service";

@Component({
  selector: 'app-youtobe-playlist',
  templateUrl: './youtobe-playlist.component.html',
  styleUrls: ['./youtobe-playlist.component.css']
})
export class YoutobePlaylistComponent implements OnInit{
  playlist:Song[]=[];
  constructor(private songService:SongService) {
  }
  getAll(){
    this.playlist=this.songService.playlist;
  }
  ngOnInit() {
    this.getAll();
  }
}
