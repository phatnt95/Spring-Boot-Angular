import { Component, OnInit } from '@angular/core';

@Component({
  providers: [],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  login() {
  }

  logout() {
  }

}
