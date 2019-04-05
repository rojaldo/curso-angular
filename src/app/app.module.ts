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
  ],
  imports: [
    BrowserModule, NgbModule,
    FormsModule, HttpClientModule,
    Ng5SliderModule, NgPipesModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
