import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.sass']
})
export class ApodComponent implements OnInit {

  result: any = [];
  responded = false;
  error = false;
  errorContent: any = {};
  readonly key = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
  readonly baseURL = 'https://api.nasa.gov/planetary/apod?api_key=';

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.service.getRequest(this.baseURL + this.key).subscribe(data => this.processResult(data),
    error => this.processError(error));
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


}
