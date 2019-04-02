import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor() { }

  ngOnDestroy() {
    console.log('OnDestroy()');
  }

  ngOnInit() {
    console.log('OnInit()');
  }

  handleSignal(content: string) {
    this.display = content;
  }

}
