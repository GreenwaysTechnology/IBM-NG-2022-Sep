import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist.component';



@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule,HttpClientModule
  ]
})
export class UsersModule { }
