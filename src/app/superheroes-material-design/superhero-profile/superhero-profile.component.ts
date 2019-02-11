import { Component, OnInit } from '@angular/core';

import  superheroes, {getSuperheroCreators, getSuperheroLocation} from './superhero'

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css']
})
export class SuperheroProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(superheroes, getSuperheroCreators("batman"));
  }

}
