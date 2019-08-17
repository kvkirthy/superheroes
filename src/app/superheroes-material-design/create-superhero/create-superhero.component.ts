import { Component, OnInit } from '@angular/core';
import { MatChipEvent } from '@angular/material/chips';
import { Superhero, Superhero2 } from '../models/superhero';
import { SuperheroDataService } from 'src/app/app-http-calls/superhero-data.service';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.css']
})
export class CreateSuperheroComponent implements OnInit {

  superhero: Superhero;
  
  constructor(private dataService: SuperheroDataService) { 
    this.superhero = new Superhero();

  }
  get model(){
    return JSON.stringify(this.superhero);
  }
  
  ngOnInit() {
  }
  
  add(event){
    this.superhero.favFood.push(event.value);
  }

  removeHandler(item: string){
    this.superhero.favFood.splice(this.superhero.favFood.indexOf(item));
  }

  submitForm(){
    // let hero = this.superhero as Superhero2;
    // hero.id = Math.random();
    // this.dataService
    //   .createHero (hero)
    //   .subscribe(data => console.log(data));

    let hero = this.superhero;
    this.dataService
      .updateHero (hero, "0.9247175939551284")
      .subscribe(data => console.log(data));
  }

}
