import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  /* Telling Angular to check for changes only when the input properties change. */
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  constructor() { }

  /* A decorator that allows us to pass data from the parent component to the child component. */
  @Input() 
  user: User
  /* A lifecycle hook that is called after Angular has initialized all data-bound properties of a
  directive. */
  ngOnInit() {
  }

}/* Returning the user data from the API. */

