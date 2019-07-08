import { Component } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Superheroes";

  constructor(private router: Router){    
  }

  navigateToCreate(){
    this.router.navigate(['/create-hero']);
  }

  heroListDescending(){
    this.router.navigate(['/heroes'], {queryParams:{sortOrder: 'descending'}});
  }

  superpowers:Array<string> = [
    "Can fly",
    "Strength and Stamina",
    "Kids love him"
  ];

  address: {
    firstLine: string,
    city: string
  } = {
    firstLine: "Road # 4",
    city: "Bengaluru"
  };

  printSuperhero(hero: Superhero){
    console.log(hero);
  }

  moveSuperhero(){
    this.address = {
      firstLine: this.address.firstLine,
      city: "Hyderabad"
    };
  }
}
