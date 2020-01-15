import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZMusicService {

  constructor(private http : HttpClient) { 
    
  }
  
  getNewRealeses(){

      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQCgnsCxyjN0EiKPB365C65UFcm7wUET4P3-yxg5-e8noBUpkl0zgn00Au8-My-3u2DACOxsf7UqANekaM9k8gCBduUgzA2chOrYY5pQ3Z8KyH0BCzAfFxkW7DgShrwa66kRfV_dc2XA'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});   
      
  }

  getArtist( termino : string){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCgnsCxyjN0EiKPB365C65UFcm7wUET4P3-yxg5-e8noBUpkl0zgn00Au8-My-3u2DACOxsf7UqANekaM9k8gCBduUgzA2chOrYY5pQ3Z8KyH0BCzAfFxkW7DgShrwa66kRfV_dc2XA'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=10`, {headers});
  }
}
