import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.css']
})
export class Chapter4Component implements OnInit {

  @ViewChild("chSidenav") chSidenav;
  snippet: number = 0;

  constructor() { }

  ngOnInit() {
    this.chSidenav.open();
  }

  showSnippet(snippetId, event){

    event.preventDefault();

    switch(snippetId){
      case 'snippet1':
        this.snippet = 1;
        break;
      
    }
  }

}
