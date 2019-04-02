import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnInit {

  @Input() myDisplay: string;

  constructor(public service: CalculatorService) { }

  ngOnInit() {
    this.myDisplay = this.service.display;
  }

}
