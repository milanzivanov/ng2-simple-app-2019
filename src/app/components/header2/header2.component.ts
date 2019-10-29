import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  template: `
  <nav class="navbar is-dark">

    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
      <img src="../../../assets/logo-nav@2x.png">
      </a>
    </div>

    <!-- menu -->
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="">Home</a>
        <a class="navbar-item" routerLink="contact">Contact</a>
        <a class="navbar-item" routerLink="users">Users</a>
      </div>
    </div>

  </nav>
  `,
  styles: []
})
export class Header2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
