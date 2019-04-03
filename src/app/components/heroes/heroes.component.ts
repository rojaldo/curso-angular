import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroName: string = '';
  heroDescription: string = '';
  heroes: Hero[] = [new Hero('Batman', 'dark knight'),
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

  checkDisabled() {
    return !(this.heroName !== '' && this.heroDescription !== '');
  }

}
