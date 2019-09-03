import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SuperheroesMaterialDesignModule} from './superheroes-material-design/superheroes-material-design.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeSamplesModule } from './code-samples/code-samples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuperheroesMaterialDesignModule,
    CodeSamplesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
