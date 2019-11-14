import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main.component";
import { CounterComponent } from "./counter/counter.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const routes: Routes = [
    { path: '', component: MainComponent,
        children: [
            { path: 'counter', component: CounterComponent },
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
