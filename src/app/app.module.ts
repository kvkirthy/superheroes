import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SuperheroesMaterialDesignModule} from './superheroes-material-design/superheroes-material-design.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuperheroesMaterialDesignModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
