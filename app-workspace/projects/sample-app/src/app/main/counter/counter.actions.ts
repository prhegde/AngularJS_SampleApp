import { Action } from "@ngrx/store";

export const ACTION_TYPES = {
    ADD: '[counter] increment',
    REMOVE: '[counter] decrement',
    RESET: '[counter] reset',
};

/**
 * Every action is comprised of at least a type and an optional payload. Expressing actions as
 * classes enables powerful type checking in reducer functions.
 */

export class AddHostAction implements Action {
    readonly type = ACTION_TYPES.ADD;
    constructor( public payload?: any) {}
}

export class RemoveHostAction implements Action {
    readonly type = ACTION_TYPES.REMOVE;
    constructor( public payload?: any) {}
}
export class ResetHostAction implements Action {
    readonly type = ACTION_TYPES.RESET;
    constructor( public payload?: any) {}
}

/**
 * Export a type alias of all actions in this action group so that reducers
 * can easily compose action types
 */
export type Actions
    = AddHostAction
    | RemoveHostAction
    | ResetHostAction;