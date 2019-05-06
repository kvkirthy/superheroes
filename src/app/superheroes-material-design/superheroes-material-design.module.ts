import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { SuperheroToolbarComponent } from './superhero-toolbar/superhero-toolbar.component';
import HitCounter from './utilities/hit-counter';
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';

@NgModule({
  declarations: [
    SuperheroProfileComponent, 
    SuperheroToolbarComponent, 
    SuperheroProfileFooterComponent, 
    SuperheroListComponent, 
    CreateSuperheroComponent, 
  ],
  imports: [
    BrowserAnimationsModule, 
    MatSelectModule,
    MatInputModule,
    MatCardModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent,
    CreateSuperheroComponent
  ],
  providers:[HitCounter]
})
export class SuperheroesMaterialDesignModule { }
