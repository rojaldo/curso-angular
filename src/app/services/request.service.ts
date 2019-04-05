import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  readonly apodKey = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
  readonly apodBaseURL = 'https://api.nasa.gov/planetary/apod?api_key=';


  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(url);
  }

  getApodRequest(date?: any): Observable<any> {
    let url = this.apodBaseURL + this.apodKey;
    if (date) {
      url += '&date=' +
      date.year + '-' +
      date.month + '-' +
      date.day;
    }
    console.log(url);
    return this.http.get(url);
  }

}
