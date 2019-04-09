import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass']
})
export class CountriesComponent implements OnInit {

  result: any = [];
  responded: boolean = false;
  longitude = 2.4246;
  latitude = 48.845;

  countries: string[] = [];

  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.service.getRequest('https://restcountries.eu/rest/v2/all').subscribe((data) => this.processRequest(data));
  }

  processRequest(data: any) {
    this.result = data;
    for (const country of this.result) {
      this.countries.push(country.name);
    }

    this.responded = true;
  }

}
