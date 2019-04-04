import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const beers = [];
    for (const beer of value) {
      if (beer.abv >= args[0] && beer.abv <= args[1]) {
        beers.push(beer);
      }
    }
    return beers;
  }

}
