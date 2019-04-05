import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Apod } from 'src/app/model/apod';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.sass']
})
export class ShowApodComponent implements OnInit, OnChanges {

  @Input() date: any;
  result: any;
  selectedDate: any;
  responded = false;
  error = false;
  errorContent: any = {};
  apod: Apod;

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };

  constructor(private service: RequestService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.getApiInfo(this.date);
  }

  processResult(data: any) {
    this.result = data;
    this.apod = new Apod(data);
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
