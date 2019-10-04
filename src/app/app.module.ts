import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComandaBindingComponent } from './comanda-binding/comanda-binding.component';

import {ReactiveForms} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ComandaBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
