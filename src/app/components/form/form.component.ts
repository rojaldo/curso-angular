import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Output() newHero = new EventEmitter<Hero>();
  heroName: string = '';
  heroDescription: string = '';
  heroRating: number = 5;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.newHero.emit(new Hero(this.heroName, this.heroDescription, this.heroRating));
    this.heroName = '';
    this.heroDescription = '';
    this.heroRating = 5;
  }

  checkDisabled() {
    return !(this.heroName !== '' && this.heroDescription !== '');
  }


}
