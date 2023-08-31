import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-songs-card',
  templateUrl: './songs-card.component.html',
  styleUrls: ['./songs-card.component.scss']
})
export class SongsCardComponent {

  @Input( ) public playlistThumbnail !: string ;
  @Input( ) public title !: string ;
  @Input( ) public description !: string ;

}
