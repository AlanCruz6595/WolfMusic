import { Component, OnInit } from '@angular/core';
import { ZMusicService } from 'src/app/services/z-music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  newSongs : any[] = []; 
  //Metodo GET Traer datos JSON o AJAX ya sea desde otro servidor por medio de URL
  constructor(private zmusic : ZMusicService) {


    this.zmusic.getNewRealeses()
    .subscribe( (data: any)=>{
      console.log(data.albums.items);
      this.newSongs = data.albums.items;
    })
  }
  
}
