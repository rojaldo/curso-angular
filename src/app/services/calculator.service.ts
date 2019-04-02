import { Injectable } from '@angular/core';
enum State { init, firstFigure, secondFigure, result }

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  currentState = State.init;

  display = '';

  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

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
