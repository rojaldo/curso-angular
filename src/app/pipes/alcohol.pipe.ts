import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'number') {
      return Math.floor(value) + ',' + Math.round((value % 1) * 10) + 'º';
    } else {
      console.error('Wrong parameter type: ' + (typeof value));
    }
    return value;
  }

}
