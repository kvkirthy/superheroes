import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter4Component } from './chapter4/chapter4.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [Chapter4Component],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class CodeSamplesModule { }
