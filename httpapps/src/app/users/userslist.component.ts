import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.type';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styles: [
  ]
})
export class UserslistComponent implements OnInit {
  @Input()
  users!: Observable<User[]>
  @Input()
  title:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
