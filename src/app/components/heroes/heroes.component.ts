import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroName: string = '';
  heroDescription: string = '';
  heroes: Hero[] = [{name: 'Batman', description: 'dark knight'},
  {name: 'Superman', description: 'man of steel'},
  {name: 'Spiderman', description: 'Spidy'}];
  constructor() { }

  ngOnInit() {
  }

  click() {
    this.heroes.push(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
  }

}

class Hero {
  constructor(public name: string, public description: string) {}
}
