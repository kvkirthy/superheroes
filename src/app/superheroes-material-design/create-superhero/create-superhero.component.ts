import { Component, OnInit } from '@angular/core';
import { MatChipEvent } from '@angular/material/chips';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.css']
})
export class CreateSuperheroComponent implements OnInit {

  superhero: Superhero;
  
  constructor() { 
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



}
