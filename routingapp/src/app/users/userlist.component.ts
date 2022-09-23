import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { User } from './user.type';

@Component({
  selector: 'app-userlist',
  templateUrl: 'userlist.component.html',
  styles: [
  ]
})
export class UserlistComponent implements OnInit {
  users!: User[]
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users
    })
  }

}
