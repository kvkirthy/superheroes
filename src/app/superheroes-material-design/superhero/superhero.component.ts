import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  hero: any;
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
    this.hero = this.heroes.find( i => i.name.toLowerCase() === this.route.snapshot.params.heroName.toLowerCase());
  }

  ngOnInit() {
  }

}
