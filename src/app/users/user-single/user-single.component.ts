import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  template: `
  <section class="section">
    <div class="container">

      <div class="card" *ngIf="user">
        <img [src]="user.avatar_url">
        <h2>{{ user.login }}</h2>
      </div>
    </div>
  </section>
  `,
  styles: []
})
export class UserSingleComponent implements OnInit {

  // property to hold our user when we eventually grab them from github api
  user;

  // inject the ActivatedRoute as route
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      const username = params["username"];

      // now we can go grab user data from github
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
    })
  }

}
