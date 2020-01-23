import { Component, OnInit } from '@angular/core';
import { ZMusicService } from 'src/app/services/z-music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  newSongs : any[] = []; 
  loader : boolean;

  error: boolean;
  mensajeError: string;

  //Metodo GET Traer datos JSON o AJAX ya sea desde otro servidor por medio de URL
  constructor(private zmusic : ZMusicService) {

    this.loader = true;
    this.error = false;

    this.zmusic.getNewRealeses()
    .subscribe( (data: any)=>{
      this.newSongs = data;
      this.loader = false;
    },(errorService) =>{
      
      this.loader = false;
      this.error = true; 
      console.log(errorService);
      this.mensajeError = errorService.error.error.message;
    });
  }
  
}
