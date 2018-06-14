import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectePanel = true;
  acceptsCookies = true;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.acceptsCookies = this.cookieService.get('COOKIES_ACCEPTED') === 'true';
  }

  public switchPanel() {
    this.selectePanel = !this.selectePanel;
  }

  public acceptCookies() {
    this.cookieService.put('COOKIES_ACCEPTED', 'true');
    this.acceptsCookies = true;
  }

}
