import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.sass']
})
export class ApodComponent implements OnInit {

  result: any = [];
  selectedDate: any;
  responded = false;
  error = false;
  errorContent: any = {};

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.getApiInfo();
  }

  processResult(data: any) {
    this.result = data;
    this.error = false;
    this.responded = true;
  }

  processError(error: any) {
    console.log('Error downloading: ' + error);
    this.error = true;
    this.errorContent = error;
    this.responded = true;
  }

  getApiInfo(date?: any) {
    this.service.getApodRequest(date).subscribe(data => this.processResult(data),
    error => this.processError(error));
  }


}
