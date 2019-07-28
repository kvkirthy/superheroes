import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroListComponent } from './superheroes-material-design/superhero-list/superhero-list.component';
import { CreateSuperheroReactiveFormComponent } from './superheroes-material-design/create-superhero-reactive-form/create-superhero-reactive-form.component';
import { SuperheroComponent } from './superheroes-material-design/superhero/superhero.component';
import { ErrorPageComponent } from './superheroes-material-design/error-page/error-page.component';
import { CreateSuperheroComponent } from './superheroes-material-design/create-superhero/create-superhero.component';

const routes: Routes = [
  {
    path: "heroes",
    component: SuperheroListComponent
  },
  {
    path: "create-hero",
    component: CreateSuperheroComponent
  },
  {
    path: "hero/:heroName",
    component: SuperheroComponent
  },
  {
    path: "list",
    redirectTo: "/heroes"
  },
  {
    path: "",
    redirectTo: "/heroes",
    pathMatch: "full"
  },
  {
    path: "**",
    component: ErrorPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
