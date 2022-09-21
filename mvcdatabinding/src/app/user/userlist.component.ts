import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.type';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styles: [
  ],
  // providers:[UserService]
})
export class UserlistComponent implements OnInit {

  users!: Array<User>
  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    // console.log(this.userService.getUsers())
    // this.users = this.userService.getUsers()
    //async call using callbacks
    // this.userService.getUsersAsyncCB((users: User[]) => {
    //   this.users = users
    // })
    //async call using promises
    // this.userService.getUsersAsyncPromsie()
    //   .then((users: User[]) => {
    //     this.users = users
    //   })
    //async call using async.. await  keyword
    try {
      const users = await this.userService.getUsersAsyncPromsie()
      this.users = users
    }
    catch (err) {

    }
  }

}
