import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
enum State { init, firstFigure, secondFigure, result }

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.sass']
})
export class KeyboardComponent implements OnInit {

  @Output() signal = new EventEmitter<string>();

  constructor(public service: CalculatorService) { }

  ngOnInit() {

  }

  handleNumber(num: number) {
    switch (this.service.currentState) {
      case State.init:
        this.service.firstFigure = num;
        this.service.currentState = State.firstFigure;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.firstFigure:
        this.service.firstFigure = this.service.firstFigure * 10 + num;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.secondFigure:
        this.service.secondFigure = this.service.secondFigure * 10 + num;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.result:
        this.service.secondFigure = 0;
        this.service.firstFigure = num;
        this.service.operator = '';
        this.service.result = 0;
        this.service.display = String(num);
        this.signal.emit(this.service.display);
        this.service.currentState = State.firstFigure;
        break;
    }
  }

  handleSymbol(symbol: string) {
    switch (this.service.currentState) {
      case State.firstFigure:
        if (symbol !== '=' && symbol !== '.') {
          this.service.operator = symbol;
          this.service.currentState = State.secondFigure;
        }
        this.service.display += symbol;
        this.signal.emit(this.service.display);
        break;
      case State.secondFigure:
        if (symbol === '=') {
          this.service.result = this.service.resolve();
          this.service.currentState = State.result;
          this.service.display = this.service.display + symbol + this.service.result;
          this.signal.emit(this.service.display);
        }
        break;
    }
  }

}
