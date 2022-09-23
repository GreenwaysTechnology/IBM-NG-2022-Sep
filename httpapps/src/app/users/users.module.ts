import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http'
import { UtilModule } from '../util/util.module';
import { UserslistComponent } from './userslist.component';
import { UsersformComponent } from './usersform.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UserslistComponent,
    UsersformComponent
  ],
  imports: [
    CommonModule, HttpClientModule,UtilModule,FormsModule
  ],
  exports: [
    UsersComponent,
    UserslistComponent,
    UsersformComponent
  ]
})
export class UsersModule { }
