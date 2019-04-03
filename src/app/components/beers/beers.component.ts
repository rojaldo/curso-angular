import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.sass']
})
export class BeersComponent implements OnInit {

  result: any = {};

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.service.getRequest('https://api.punkapi.com/v2/beers').subscribe(data => this.processResult(data));
  }

  processResult(data: any) {
    this.result = data;
  }

}
