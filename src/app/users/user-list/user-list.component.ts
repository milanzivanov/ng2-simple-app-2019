import { Component, OnInit } from '@angular/core';
import { UserService, UserInterface } from 'src/app/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  template: `
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">

        <!-- loop over our users and give them each a card -->
        <div class="column is-4" *ngFor="let user of users | async">
          <div class="card">
            <div class="card-content">
              <a routerLink="/users/{{ user.login }}">{{ user.login }}</a>
            </div>      
          </div>      
        </div>

      </div>
    </div>
  </section>
  `,
  styles: []
})
export class UserListComponent implements OnInit {

  users: Observable<Object>;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(users => console.log(users));
    this.users = this.userService.getUsers();

  }

}
