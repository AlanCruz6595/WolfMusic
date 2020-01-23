import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

// Observable importar desde reactiveExtensions (rxjs)
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZMusicService {

  constructor(private http : HttpClient) { 

  }
    
    getQuery( query: string){

      const uniqueUrl = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQAmtJVPWmTI2Nj5lRIyTLfSDGswpTy2Oqi2tuW7jDC47YpuDRjfrP7MR6ZM1ExRYvgFU9eocQWygd79XEJKLdY6YLdTG0feDLtUUidXcWDvvB5_TTxRS9ucNmoQw_Ly_s6EmSLIACUh'
      });

      return this.http.get( uniqueUrl, { headers });
    }
    
  
  getNewRealeses(){

      // const headers = new HttpHeaders({
      //   'Authorization' : 'Bearer BQDqOArUFLpcFIAhN0pocjBk0Vhh9izA6IO6-Qt8r2mQi41daminNW2odCaz4hG85eZNrUysHBm3agRxWU-6VVra47bVI-AZEdrYs_zMpDoqG2uPcChMRfvOWdn8QYRSmExBUzrEFg1m'
      // });

      return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items));  
      
      
  }

  getArtists( termino : string){

    // const headers = new HttpHeaders({
    //   'Authorization' : 'Bearer BQDqOArUFLpcFIAhN0pocjBk0Vhh9izA6IO6-Qt8r2mQi41daminNW2odCaz4hG85eZNrUysHBm3agRxWU-6VVra47bVI-AZEdrYs_zMpDoqG2uPcChMRfvOWdn8QYRSmExBUzrEFg1m'
    // });

    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`).pipe(map( data => data['artists'].items));
  }

  getArtist( id : string){

    return this.getQuery(`artists/${id}`);
    // .pipe(map( data => data['artists'].items));
  }

  getTopTracks( id : string){

    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe( map( data => data['tracks']));
    
  }
}
