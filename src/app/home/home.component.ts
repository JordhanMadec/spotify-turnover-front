import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private selectePanel = true;

  constructor() { }

  ngOnInit() {
  }

  public switchPanel() {
    this.selectePanel = !this.selectePanel;
  }

}
