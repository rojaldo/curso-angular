import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    let symbol = ',';
    let graduation = 'º';
    if (typeof value === 'number') {
      if (args !== undefined) {
        switch (args[0]) {
          case ',':
            symbol = ',';
            break;
          case '.':
            symbol = '.';
            break;
          default:
            symbol = ',';
        }
        switch (args[1]) {
          case 'º':
            graduation = 'º';
            break;
          case '%':
            graduation = '%';
            break;
          default:
            graduation = '%';
        }
        return Math.floor(value) + symbol + Math.round((value % 1) * 10) + graduation;
      } else {
        return Math.floor(value) + symbol + Math.round((value % 1) * 10) + 'º';
      }
    } else {
      console.error('Wrong parameter type: ' + (typeof value));
      return value;
    }
  }
}


