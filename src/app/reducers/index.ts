import {appReducer, AppState} from './app';
import {xyzReducer, XyzState} from './xyz';
import {ActionReducerMap} from '@ngrx/store';


export interface RootState {
  app: AppState;
  xyz: XyzState;
}

export const reducer: ActionReducerMap<RootState> = {
  app: appReducer,
  xyz: xyzReducer
};


export const getUser = (state: RootState) => state.app.user;








