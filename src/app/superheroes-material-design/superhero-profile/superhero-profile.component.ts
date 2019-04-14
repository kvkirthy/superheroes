import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import HitCounter from "../utilities/hit-counter"
import SuperheroText from '../utilities/superhero-text';

import  superheroes, {getSuperheroCreators as customName, getSuperheroLocation} from './superhero'

export type Superhero = {
  name: string;
  firstAppearance: number;
  livesIn: string;

}

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers:[ HitCounter ],
  viewProviders:[ SuperheroText ]

})
export class SuperheroProfileComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input("lives-in") livesIn: string;

  @Output() flyWithSuperhero = new EventEmitter<Superhero>();
  
  // create a private field 
  private _firstAppearance: number;

  // use a public setter
  @Input()
  set firstAppearance(val: number){
    if(val > 1950){
      this._firstAppearance = val;
    }else{
      console.error("Superhero is too old");
    }
  }

  returnSuperheroData(){
    let hero = {
      name: this.name,
      livesIn: this.livesIn,
      firstAppearance: this._firstAppearance
    };
    this.flyWithSuperhero.emit(hero);
  }

  // getter for the use of template.
  get firstAppearance(){
    return this._firstAppearance;
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }


  constructor(private hitCounter: HitCounter) {
    //this.hitCounter.counter;
   }

   incrementCounter(){
     this.hitCounter.incrementCounter()
   }

  ngOnInit() {
  }

}
