import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];

  constructor(private service: HeroesService) { }

  ngOnInit() {
    this.heroes = this.service.heroes;
  }

  ngOnDestroy(): void {
    this.service.heroes = this.heroes;
  }

  addHero(newHero: Hero) {
    this.heroes.push(newHero);
  }

}
