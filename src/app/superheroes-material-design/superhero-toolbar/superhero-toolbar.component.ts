import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-superhero-toolbar',
  templateUrl: './superhero-toolbar.component.html',
  styleUrls: ['./superhero-toolbar.component.css']
})
export class SuperheroToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter();
  toggleValue: boolean=true;

  toggleForMenuClick(){
    this.menuClick.emit(this.toggleValue);
    this.toggleValue = !this.toggleValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
