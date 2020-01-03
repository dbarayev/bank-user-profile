import { Injectable } from '@angular/core';
import { User } from '../user-profile/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserProfileService {

  constructor(private http: HttpClient) { }

  private usersUrl = 'api/users';  // URL to web api

  getUsers() : Observable<User> {
    return this.http.get<User>(this.usersUrl);
  }

}