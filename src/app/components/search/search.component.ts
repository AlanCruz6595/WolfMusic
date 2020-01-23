import { Component,} from '@angular/core';
import { ZMusicService } from 'src/app/services/z-music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  artists : any[] = [];
  loader : boolean;

  constructor(private zMusicService : ZMusicService) { }

  buscar(termino: string){
    console.log(termino);

    this.loader = true;
    this.zMusicService.getArtists(termino).subscribe((data: any) =>{
      console.log(data);
      this.artists = data;
      this.loader = false;
    })
  }
  
}
