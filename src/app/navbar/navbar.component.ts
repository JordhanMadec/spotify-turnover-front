import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isSidenavVisible = false;
  lightTheme = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private cookieService: CookieService) {}

  ngOnInit() {
    this.lightTheme = this.cookieService.get('THEME') === 'light';
    this.setTheme();
  }

  public toggleSidenav() {
    this.isSidenavVisible = !this.isSidenavVisible;
  }

  public toggleTheme() {
    this.lightTheme = !this.lightTheme;
    this.setTheme();
  }

  public setTheme() {
    if (this.lightTheme) {
      document.body.classList.add('light-theme');
      this.cookieService.set('THEME', 'light');
    } else {
      document.body.classList.remove('light-theme');
      this.cookieService.set('THEME', 'dark');
    }
  }

  public logout() {
    this.isSidenavVisible = false;
    this.router.navigate(['/']);
  }
}
