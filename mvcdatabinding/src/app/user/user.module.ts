import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist.component';
import {UserService} from './user.service'


@NgModule({
  declarations: [
    UserComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    UserlistComponent
  ],
  // providers:[UserService]
})
export class UserModule { }
