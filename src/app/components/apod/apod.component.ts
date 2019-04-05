import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Apod } from 'src/app/model/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.sass']
})
export class ApodComponent implements OnInit {

  selectedDate: any;
  dates: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
