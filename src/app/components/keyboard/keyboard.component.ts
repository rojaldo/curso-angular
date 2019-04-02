import { Component, OnInit, Output, EventEmitter } from '@angular/core';
enum State { init, firstFigure, secondFigure, result }

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.sass']
})
export class KeyboardComponent implements OnInit {

  @Output() signal = new EventEmitter<string>();
  currentState = State.init;

  display = '';

  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit() {
  }

  handleNumber(num: number) {
    switch (this.currentState) {
      case State.init:
        this.firstFigure = num;
        this.currentState = State.firstFigure;
        this.display += num;
        this.signal.emit(this.display);
        break;
      case State.firstFigure:
        this.firstFigure = this.firstFigure * 10 + num;
        this.display += num;
        this.signal.emit(this.display);
        break;
      case State.secondFigure:
        this.secondFigure = this.secondFigure * 10 + num;
        this.display += num;
        this.signal.emit(this.display);
        break;
      case State.result:
        this.secondFigure = 0;
        this.firstFigure = num;
        this.operator = '';
        this.result = 0;
        this.display = String(num);
        this.signal.emit(this.display);
        this.currentState = State.firstFigure;
        break;
    }
  }

  handleSymbol(symbol: string) {
    switch (this.currentState) {
      case State.firstFigure:
        if (symbol !== '=' && symbol !== '.') {
          this.operator = symbol;
          this.currentState = State.secondFigure;
        }
        this.display += symbol;
        this.signal.emit(this.display);
        break;
      case State.secondFigure:
        if (symbol === '=') {
          this.result = this.resolve();
          this.currentState = State.result;
          this.display = this.display + symbol + this.result;
          this.signal.emit(this.display);
        }
        break;
    }
  }

  resolve() {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
    }
  }
}
