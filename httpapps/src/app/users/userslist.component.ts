import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  title: string = ''
  selectedUser!: User

  @Input()
  status!: string
  @Input()
  loading!: boolean

  //Event Emitter Object
  @Output()
  onSendRequest = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  //Event Listener
  onSelect(user: User) {
    console.log(user)
    this.selectedUser = user
  }
  //send data to the parent component
  sendUser() {
    let user: User = {
      id: Math.random(),
      name: 'userName' + Math.random(),
      date: new Date(),
      points: 9888.8777
    }
    this.onSendRequest.emit(user)
  }

}
