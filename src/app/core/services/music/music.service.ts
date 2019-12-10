import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { infoArtist, artist } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  getAllArtist(): Observable<infoArtist[]> {
    const url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b89db013b44006e009a3c25c669b7fe6&format=json';
    return this.http.get<infoArtist[]>(url).pipe(map((data: any) => data.artists.artist as infoArtist[]));
  }
}
