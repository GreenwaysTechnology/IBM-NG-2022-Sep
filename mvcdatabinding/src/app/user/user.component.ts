import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  // //User model: using Object
  // user: User = {
  //   id: 1,
  //   name: 'Subramanian',
  //   status: "Active",
  //   skills: [{
  //     skillId: 10,
  //     skillName: 'Javascript'
  //   },
  //   {
  //     skillId: 11,
  //     skillName: 'Angular'
  //   },
  //   {
  //     skillId: 12,
  //     skillName: 'Microservices'
  //   }
  //   ]
  // }

  user!:User

  constructor(private userService:UserService) { 
    this.user = this.userService.getUser()
  }

  ngOnInit(): void {
  }

}
