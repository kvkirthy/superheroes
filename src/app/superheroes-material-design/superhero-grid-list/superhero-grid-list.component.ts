import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-superhero-grid-list',
  templateUrl: './superhero-grid-list.component.html',
  styleUrls: ['./superhero-grid-list.component.css']
})
export class SuperheroGridListComponent implements OnInit {

  private heroes: Array<Superhero> = [

    {
      name: "Spiderman",
      email: "spiderman@angularsample.com",
      details: "A hero in New York city",
      country: "United States",
      specialPowers: ["Shoots web"],
      cardImage: "spiderman.jpg",
      favFood: ["Cheese burger"]
    },
    {
      name: "Batman",
      email: "batman@angularsample.com",
      details: "A hero in Gotham city",
      country: "United Kingdom",
      cardImage: "batman.jpg",
      specialPowers: ["Martial Arts"],
      favFood: ["Spaghetti"]
    },
    {
      name: "Chhotta Bheem",
      email: "ChhottaBheem@angularsample.com",
      details: "A hero in Dholakpur village",
      country: "India",
      cardImage: "bheem.png",
      specialPowers: ["Strong"],
      favFood: ["Laddu"]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
