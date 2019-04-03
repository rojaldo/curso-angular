import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [new Hero('Batman', 'dark knight'),
  new Hero('Superman', 'man of steel'),
  new Hero('Spiderman', 'Spidy')];
  constructor() { }

  ngOnInit() {
  }

  addHero(newHero: Hero) {
    this.heroes.push(newHero);
  }

}
