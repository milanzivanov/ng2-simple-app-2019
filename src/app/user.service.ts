import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // data: UserInterface[]; 

  // define our class properties. apiUrl is what we need
  // usually you could get this from an environment file
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object> {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  getUser(username: string): Observable<Object> {
    return this.http.get(`${this.apiUrl}/${username}`); 
  }

}

// interface
export interface UserInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
