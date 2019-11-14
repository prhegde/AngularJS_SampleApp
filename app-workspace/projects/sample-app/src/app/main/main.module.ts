import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from "@ngrx/store";
import { reducers as mainReducer } from './main.feature.reducer';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from "@clr/angular";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from "@angular/forms";
import { DashboardService } from "./shared/dashboard.service";


@NgModule({
    declarations: [
        MainComponent,
        HeaderComponent,
        NavBarComponent,
        CounterComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        ClarityModule,
        StoreModule.forFeature('app-state', mainReducer),
        FormsModule
    ],
    providers: [
        DashboardService
    ]
})
export class MainModule { }
