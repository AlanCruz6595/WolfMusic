import { Component,} from '@angular/core';
import { ZMusicService } from 'src/app/services/z-music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  artists : any[] = [];

  constructor(private zMusicService : ZMusicService) { }

  buscar(termino: string){
    console.log(termino);
    this.zMusicService.getArtist(termino).subscribe((data: any) =>{
      console.log(data.artists.items);
      this.artists = data.artists.items;
    })
  }
  
}
