import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-trivial-card',
  templateUrl: './trivial-card.component.html',
  styleUrls: ['./trivial-card.component.sass']
})
export class TrivialCardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  handleClick(buttonIndex: number) {
    this.card.responded = true;
  }
  getClass(): any {
    if (this.card.responded) {
      return {'btn': true, 'btn-secondary': true, 'btn-block': true};
    } else {
      return {'btn': true, 'btn-primary': true, 'btn-block': true};
    }
  }

}
