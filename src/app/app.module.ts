import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DisplayComponent } from './components/display/display.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalculatorService } from './services/calculator.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { BeersComponent } from './components/beers/beers.component';
import { AlcoholPipe } from './pipes/alcohol.pipe';

import { Ng5SliderModule } from 'ng5-slider';
import {NgPipesModule} from 'ngx-pipes';
import { RangePipe } from './pipes/range.pipe';
import { ApodComponent } from './components/apod/apod.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ShowApodComponent } from './components/show-apod/show-apod.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { CountriesComponent } from './components/countries/countries.component';
import { MapModule } from './map/map.module';
import { TrivialComponent } from './components/trivial/trivial.component';
import { TrivialCardComponent } from './components/trivial-card/trivial-card.component';
import {UIRouterModule} from '@uirouter/angular';
import { RequestService } from './services/request.service';
import { HeroesService } from './services/heroes.service';

const trivialState = { name: 'trivial', url: '/trivial',  component: TrivialComponent };
const countriesState = { name: 'countries', url: '/countries',  component: CountriesComponent };
const validatorState = { name: 'validator', url: '/countries',  component: FormValidationComponent };
const apodState = { name: 'apod', url: '/countries',  component: ApodComponent };
const beersState = { name: 'beers', url: '/countries',  component: BeersComponent };
const heroesState = { name: 'heroes', url: '/countries',  component: HeroesComponent };
const calculatorState = { name: 'calculator', url: '/countries',  component: CalculatorComponent };
const STATE_ARRAY = [ trivialState, countriesState, validatorState, apodState, beersState, heroesState, calculatorState];

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    ListComponent,
    FormComponent,
    BeersComponent,
    AlcoholPipe,
    RangePipe,
    ApodComponent,
    ShowApodComponent,
    FormValidationComponent,
    CountriesComponent,
    TrivialComponent,
    TrivialCardComponent,
  ],
  imports: [
    MapModule,
    UIRouterModule.forRoot({ states: STATE_ARRAY, useHash: true }),
    BrowserModule, NgbModule,
    FormsModule, HttpClientModule,
    Ng5SliderModule, NgPipesModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [CalculatorService, RequestService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
