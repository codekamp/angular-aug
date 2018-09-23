import {Action} from '@ngrx/store';

export interface MyAction extends Action {
  payload?: any;
}
