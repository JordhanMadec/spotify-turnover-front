import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  private isSidenavVisible = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  public toggleSidenav() {
    this.isSidenavVisible = !this.isSidenavVisible;
  }

  public logout() {
    this.isSidenavVisible = false;
    this.router.navigate(["/"]);
  }
}
