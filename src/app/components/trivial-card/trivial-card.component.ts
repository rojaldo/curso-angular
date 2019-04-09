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
    this.card.respondedIndex = buttonIndex;
  }
  getClass(index: number): any {
    const success = this.card.answers[index] === this.card.correctAnswer;
    const danger = (this.card.respondedIndex === index) && this.card.answers[this.card.respondedIndex] !== this.card.correctAnswer;
    if (this.card.responded) {
      return {'btn': true, 'btn-secondary': true, 'btn-success': success, 'btn-danger': danger, 'btn-block': true};
    } else {
      return {'btn': true, 'btn-primary': true, 'btn-block': true};
    }
  }

}
