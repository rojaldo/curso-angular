import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: Hero[] = [new Hero('Batman', 'dark knight'),
  new Hero('Superman', 'man of steel'),
  new Hero('Spiderman', 'Spidy')];
  constructor() { }
}
