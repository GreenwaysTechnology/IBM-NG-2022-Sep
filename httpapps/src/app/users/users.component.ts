import { Component, OnInit } from '@angular/core';
import { User } from './user.type';
import { Observable } from 'rxjs'
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  // styles: [`
  //   h1 {
  //     color:'blue'
  //   }`
  // ]
  styleUrls: ['user.component.css']
})
export class UsersComponent implements OnInit {

  // users!:Array<User>
  users!: Observable<User[]>
  constructor(private userService: UsersService) { }


  ngOnInit(): void {
    //console.log(this.userService.getUsers())
    // this.userService.getUsers().subscribe({
    //   next: users => {
    //     console.log(users)
    //     this.users = users
    //   }
    // })
    this.users = this.userService.getUsers()

  }

}
