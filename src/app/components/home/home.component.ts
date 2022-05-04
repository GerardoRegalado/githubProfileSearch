import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';
import { User } from '../../models/user.model';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators'
import { EMPTY } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private githubService: GithubService) { }
  /* The above code is creating a new instance of the FormControl class and assigning it to the
  findControl variable. */
  findControl =new FormControl();
  
  error: boolean = false;
  user: User = null

  ngOnInit(): void {
    /* 1. The valueChanges property of the FormControl emits a value every time the value of the control
    changes.
    2. The filter operator filters the values emitted by the valueChanges property.
    3. The debounceTime operator waits for a specified amount of time before emitting the value.
    4. The switchMap operator switches to a new observable.
    5. The catchError operator catches any errors that occur in the observable.
    6. The subscribe method subscribes to the observable. */
    this.findControl.valueChanges
    .pipe(filter(value=>value.lenght>3),
    debounceTime(1000),
    switchMap(value => this.githubService.getUser(value).pipe(
    catchError(err => {
    this.user =null
    this.error=true
    return EMPTY
      })))
      ).subscribe(user => {this.user = user})
  }

}
