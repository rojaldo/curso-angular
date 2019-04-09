import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.sass']
})
export class TrivialComponent implements OnInit {

  result: any = {};
  cards: Card[] = [];
  responded = false;

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.service.getRequest('https://opentdb.com/api.php?amount=10').subscribe((data) => this.processRequest(data));
  }

  processRequest(data: any) {
    this.result = data;
    for (const card of this.result.results) {
      this.cards.push(new Card(card));
    }

    this.responded = true;
  }

}
