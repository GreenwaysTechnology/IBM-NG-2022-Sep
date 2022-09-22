import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFraction'
})
export class DecimalFractionPipe implements PipeTransform {

  transform(value: number, noofDigits: number = 1): string {
    return value.toFixed(noofDigits)
  }

}
