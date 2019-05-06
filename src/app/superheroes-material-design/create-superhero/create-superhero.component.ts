import { Component, OnInit } from '@angular/core';
import { MatChipEvent } from '@angular/material/chips';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.css']
})
export class CreateSuperheroComponent implements OnInit {

  country: string;

  items: Array<string> = ["Laddu", "Cheese Burger" ];

  
  constructor() { }
  
  ngOnInit() {
  }
  
  add(event){
    this.items.push(event.value);
  }

  removeHandler(item: string){
    this.items.splice(this.items.indexOf(item));
  }



}
