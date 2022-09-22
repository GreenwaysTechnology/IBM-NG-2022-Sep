import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http'
import { UtilModule } from '../util/util.module';
import { UserslistComponent } from './userslist.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserslistComponent
  ],
  imports: [
    CommonModule, HttpClientModule,UtilModule
  ],
  exports: [
    UsersComponent,
    UserslistComponent
  ]
})
export class UsersModule { }
