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

  loading: boolean = true;
  status: string = "loading....."

  user!: User

  message: string = ""

  constructor(private userService: UsersService) { }


  ngOnInit(): void {
    //console.log(this.userService.getUsers())
    // this.userService.getUsers().subscribe({
    //   next: users => {
    //     console.log(users)
    //     this.users = users
    //   }
    // })
    //todo: remove this once if you test the code
    // setTimeout(() => {
    //   this.users = this.userService.getUsers()
    //   this.loading = !this.loading;
    // }, 5000)
    this.users = this.userService.getUsers()
    this.loading = !this.loading;
  }
  getUser(user: User) {
    console.log('Parent  ', user)
    this.userService.save(user).subscribe({
      next: user => {
        this.message = 'successfully added'
      },
      error: err => {
        console.log('User not added', err)
      }
    })
  }
}
