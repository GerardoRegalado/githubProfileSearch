import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

 /* Injecting the HttpClient into the service. */
  constructor(private http: HttpClient) { }

  //            👇  Type user Observable
  getUser(name: string): Observable<User>  {
  
    /* Using template literals to create a url with the 👇 name of the user. */
    const url = `https://api.github.com/users/${name}`

    /* Returning the user data from the API. */
    return this.http.get<User>(url)
  }
}

