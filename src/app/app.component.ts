import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  printSuperhero(hero: Superhero){
    console.log(hero);
  }
}
