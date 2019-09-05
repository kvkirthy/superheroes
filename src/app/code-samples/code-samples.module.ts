import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter4Component } from './chapter4/chapter4.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Chapter5Component } from './chapter5/chapter5.component';

@NgModule({
  declarations: [Chapter4Component, Chapter5Component],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CodeSamplesModule { }
