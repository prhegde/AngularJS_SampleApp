import * as counterActions from "./counter.actions";



export interface State {
  numberOfHosts: number;
}

export const initialState: State = {
    numberOfHosts: 0
};

export function reducer(state = initialState, action: counterActions.Actions): State {

  switch (action.type) {
      case counterActions.ACTION_TYPES.ADD: {
        return Object.assign({}, state, {
            numberOfHosts: state.numberOfHosts + 1
        });
      }

      case counterActions.ACTION_TYPES.REMOVE: {
          return Object.assign({}, state, {
              numberOfHosts: state.numberOfHosts - 1
          });
      }

      case counterActions.ACTION_TYPES.RESET: {
          return Object.assign({}, state, {
              numberOfHosts: 0
          });
      }

      default:
        return state;
  }
}

export const getCounterState = (state: State) => state.numberOfHosts;
