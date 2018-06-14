import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-artists',
  templateUrl: './recent-artists.component.html',
  styleUrls: ['./recent-artists.component.scss']
})
export class RecentArtistsComponent implements OnInit {

  recentArtists = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() { }

  ngOnInit() {
  }

}
