import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import {BeerService} from "./shared/beer/beer.service";
import {HttpClientModule} from "@angular/common/http";
import {GiphyService} from "./shared/giphy/giphy.service";

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [BeerService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
