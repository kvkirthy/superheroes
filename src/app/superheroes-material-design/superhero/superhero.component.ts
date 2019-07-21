import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Superhero } from '../models/superhero';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  hero: Superhero;
  private heroes: Array<Superhero> = [
    {
      name: "Chhotta Bheem",
      email: "ChhottaBheem@angularsample.com",
      details: "A hero in Dholakpur village",
      country: "India",
      specialPowers: ["Strong"],
      favFood: ["Laddu"]
    },
    {
      name: "Spiderman",
      email: "spiderman@angularsample.com",
      details: "A hero in New York city",
      country: "United States",
      specialPowers: ["Shoots web"],
      favFood: ["Cheese burger"]
    },
    {
      name: "Batman",
      email: "batman@angularsample.com",
      details: "A hero in Gotham city",
      country: "United Kingdom",
      specialPowers: ["Martial Arts"],
      favFood: ["Spaghetti"]
    }
  ];

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    // Using Snpashot
    // let heroNameParam = this.route.snapshot.params.heroName;
    // this.hero = this.heroes.find( i => i.name.toLowerCase() === heroNameParam.toLowerCase());



//    Using Observable
    let heroNameParam: string;
    this.route
      .params
      .subscribe ( r => {
        this.hero = this.heroes.find( i => i.name.toLowerCase() === r.heroName.toLowerCase());
      });

   }



}