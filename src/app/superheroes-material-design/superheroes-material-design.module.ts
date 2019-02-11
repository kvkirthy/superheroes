import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { SuperheroToolbarComponent } from './superhero-toolbar/superhero-toolbar.component';


@NgModule({
  declarations: [
    SuperheroProfileComponent, 
    SuperheroToolbarComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    MatCardModule, 
    MatToolbarModule
  ],
  exports: [
    SuperheroProfileComponent,
    SuperheroToolbarComponent
  ]
})
export class SuperheroesMaterialDesignModule { }
