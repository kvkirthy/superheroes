import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  private heroes = [
    {
      name: "Chhota Bheem",
      livesIn: "Dholakpur",
      power: "Strong"
    },
    {
      name: "Spiderman",
      livesIn: "New York",
      power: "Shoot web"
    },
    {
      name: "Batman",
      livesIn: "Gotham",
      power: "Technology"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
