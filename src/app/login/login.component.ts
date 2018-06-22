import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TurnoverApiService } from '../services/turnover-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: TurnoverApiService) { }

  ngOnInit() {
  }

  public login() {
    this.api.authenticate();
    //this.router.navigate(['/home']);
  }

}
