import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor() { }

  ngOnInit() {
  }

  handleSignal(content: string) {
    this.display = content;
  }

}
