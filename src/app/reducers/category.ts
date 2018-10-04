
import {MyAction} from '../actions/index';

export interface CategoryState {
  theIds: number[];
  entities: {[id: number]: Category};
  videos: {[id: number]: number[]};
}


export const initialState: CategoryState = {
  theIds: [],
  entities: {},
  videos: {}
};


export const categoryReducer = (currentState: CategoryState = initialState, action: MyAction): CategoryState => {
  return currentState;
};

export const _getIds = (state: CategoryState) => state.theIds;
export const _getEntities = state => state.entities;
export const _getVideoIdsMap = state => state.videos;




export interface Category {
  id: number;
  title: string;
}


