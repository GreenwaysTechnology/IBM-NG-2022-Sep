import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';



@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserlistComponent
  ]
})
export class UserModule { }
