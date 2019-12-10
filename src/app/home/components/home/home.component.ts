import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/core/services/music/music.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { infoArtist } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  info: Observable<infoArtist[]>;

  ngOnInit() {
    this.info = this.musicService.getAllArtist();
  }

}
