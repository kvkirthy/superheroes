import { Component, OnInit, ViewChild } from '@angular/core';
import { Superhero } from '../models/superhero';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-superhero-new-list',
  templateUrl: './superhero-new-list.component.html',
  styleUrls: ['./superhero-new-list.component.css']
})
export class SuperheroNewListComponent implements OnInit {

  @ViewChild("selected") selected: any;

  private heroes: Array<Superhero> = [
    {
      name: "Chhotta Bheem",
      email: "ChhottaBheem@angularsample.com",
      details: "A hero in Dholakpur village",
      country: "India",
      cardImage: "/assets/chhottabheem.png",
      specialPowers: ["a very strong boy!"],
      favFood: ["Laddu"]
    },
    {
      name: "Spiderman",
      email: "spiderman@angularsample.com",
      details: "A hero in New York city",
      country: "United States",
      specialPowers: ["Shoots web"],
      cardImage: "/assets/spiderman.jpg",
      favFood: ["Cheese burger"]
    },
    {
      name: "Batman",
      email: "batman@angularsample.com",
      details: "A hero in Gotham city",
      country: "United Kingdom",
      cardImage: "/assets/batman.png",
      specialPowers: ["Martial Arts"],
      favFood: ["Spaghetti"]
    }
  ];

  listItemSelected(data){
    //console.log(data);
  }

  selectionChangeHandler(event: MatSelectionListChange){
    console.log(event.option.value, event.option.selected);
  }

  constructor() { }

  ngOnInit() {
  }

}
