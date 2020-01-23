import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZMusicService } from 'src/app/services/z-music.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent{

  artist: any = {};
  topTracks : any[] = [];

 
  headElements = ['Foto', 'Album', 'Cancion', 'Vista Previa'];



  loaderArtist: boolean;
  

  constructor(private router: ActivatedRoute, private zMusic: ZMusicService) { 

    this.loaderArtist = true;

    this.router.params.subscribe(params => {
      
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      
      
    });

  }

  getArtist(id: string){

    this.loaderArtist = true;

    this.zMusic.getArtist(id).subscribe(artist =>{
      console.log(artist);
      this.artist = artist;

      this.loaderArtist = false;
      
    });

  }

  getTopTracks(id: string){

    this.zMusic.getTopTracks(id).subscribe( topTracks =>{
      console.log(topTracks);
      this.topTracks = topTracks;
    })
  }

}
