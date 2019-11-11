import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from "@clr/angular";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [ MainComponent, HeaderComponent, NavBarComponent, CounterComponent ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ClarityModule
  ]
})
export class MainModule { }
