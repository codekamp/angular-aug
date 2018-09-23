import {Action} from '@ngrx/store';

export interface XyzState {
  pqr: string;
}

export const initialState = {
  pqr: 'hello'
};

export const xyzReducer = (currentState: XyzState = initialState, action: Action): XyzState => {
  console.log('xyzReducer called', currentState, action);
  switch (action.type) {
    default:
      return currentState;
  }
};






