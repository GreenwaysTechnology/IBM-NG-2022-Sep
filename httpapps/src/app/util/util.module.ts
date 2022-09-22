import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalFractionPipe } from './decimal-fraction.pipe';



@NgModule({
  declarations: [
    DecimalFractionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DecimalFractionPipe
  ],
  
})
export class UtilModule { }
