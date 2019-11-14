import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


import { State, counterSelector } from "../main.feature.reducer";

import * as counterAction from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  hostCount$: Observable<number>;
  constructor(
      private route: ActivatedRoute,
      private store: Store<State>
  ) {
    this.hostCount$ = this.store.select(counterSelector.numberOfHosts);
  }

  ngOnInit() {
  }

    add() {
        this.store.dispatch(new counterAction.AddHostAction());
    }

    remove() {
        this.store.dispatch(new counterAction.RemoveHostAction());
    }

    reset() {
        this.store.dispatch(new counterAction.ResetHostAction());
    }

}
