import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.sass']
})
export class BeersComponent implements OnInit {

  result: any = [];
  beers: any[] = [];
  criteria: string = 'abv';

  value: number = 4;
  highValue: number = 8;
  options: Options = {
    floor: 0,
    ceil: 55
  };

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.service.getRequest('https://api.punkapi.com/v2/beers').subscribe(data => this.processResult(data));
  }

  handleRange(value: number, highValue: number) {
    console.log('Range: ' + value + ' - ' + highValue);
    this.beers = [];
    for (const beer of this.result) {
      if (beer.abv >= value && beer.abv <= highValue) {
        this.beers.push(beer);
      }
    }
  }

  handleClick(param: string) {
    this.criteria = param;
  }

  processResult(data: any) {
    this.result = data;
  }

}
