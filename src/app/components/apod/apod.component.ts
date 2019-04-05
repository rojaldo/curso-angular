import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Apod } from 'src/app/model/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.sass']
})
export class ApodComponent implements OnInit {

  result: any = [];
  apodResults: Apod[] = [];
  selectedDate: any;
  responded = false;
  error = false;
  errorContent: any = {};

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.getApiInfo();
  }

  processResult(data: any) {
    this.result = data;
    this.apodResults.splice(0, 0, new Apod(data));
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

  getVideoID(url: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    console.log(match[7]);
    return (match && match[7].length === 11) ? match[7] : '';
  }


}
