import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter.component';



@NgModule({
  declarations: [
    GreeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterComponent
  ]
})
export class GreeterModule { }
