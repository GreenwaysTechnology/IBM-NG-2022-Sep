import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[UserService]

})
export class AppComponent {
  title = 'mvcdatabinding';
  constructor(private userservice:UserService){
    console.log(this.userservice.getUsers())
  }
}
