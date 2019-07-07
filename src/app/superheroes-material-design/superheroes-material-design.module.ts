import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
// import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { SuperheroToolbarComponent } from './superhero-toolbar/superhero-toolbar.component';
import HitCounter from './utilities/hit-counter';
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { CreateSuperheroReactiveFormComponent } from './create-superhero-reactive-form/create-superhero-reactive-form.component';
import { SuperheroComponent } from './superhero/superhero.component';

@NgModule({
  declarations: [
    SuperheroProfileComponent, 
    SuperheroToolbarComponent, 
    SuperheroProfileFooterComponent, 
    SuperheroListComponent, 
    CreateSuperheroComponent,
    CreateSuperheroReactiveFormComponent,
    SuperheroComponent, 
  ],
  imports: [
    BrowserAnimationsModule, 
    MatSelectModule,
    MatInputModule,
    MatCardModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    //MatNativeDateModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent,
    CreateSuperheroComponent,
    CreateSuperheroReactiveFormComponent
  ],
  providers:[HitCounter]
})
export class SuperheroesMaterialDesignModule { }
