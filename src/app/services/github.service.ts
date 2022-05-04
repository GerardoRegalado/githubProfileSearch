import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  //            👇  Type user Observable
  getUser(name: string): Observable<User>  {
  //            ES6 for search user by his 'name'👇
    const url = `https://api.github.com/users/${name}`

    return this.http.get<User>(url)
  }
}

