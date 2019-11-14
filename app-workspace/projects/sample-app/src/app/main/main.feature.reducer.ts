import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRoot from '../reducers';

import * as counterReducer from '../main/counter/counter.reducer';

export interface AppState {
    hostState: counterReducer.State;
}

export interface State extends fromRoot.State {
    'app-state': AppState;
}

export const reducers = {
    hostState: counterReducer.reducer
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getAppState = createFeatureSelector<AppState>('app-state');

export const getCounterState = createSelector(getAppState, (state: AppState) => state.hostState);

export const counterSelector = {
    numberOfHosts: createSelector(getCounterState, counterReducer.getCounterState)
};
