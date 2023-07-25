import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRatesComponent } from './components/exchange-rates/exchange-rates.component';
import { ForeignExchangeRatesComponent } from './components/foreign-exchange-rates/foreign-exchange-rates.component';
import { StyleComponentComponent } from './components/style-component/style-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    ForeignExchangeRatesComponent,
    StyleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
