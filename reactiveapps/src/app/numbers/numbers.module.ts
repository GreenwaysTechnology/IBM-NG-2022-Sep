import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './numbers.component';



@NgModule({
  declarations: [
    NumbersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent
  ]
})
export class NumbersModule { }
