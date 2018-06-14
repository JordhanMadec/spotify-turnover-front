import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followed-artists',
  templateUrl: './followed-artists.component.html',
  styleUrls: ['./followed-artists.component.scss']
})
export class FollowedArtistsComponent implements OnInit {

  followedArtists = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() { }

  ngOnInit() {
  }

}
