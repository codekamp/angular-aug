
import {MyAction} from '../actions/index';

export interface CategoryState {
  ids: number[];
  entities: {[id: number]: Category};
  videos: {[id: number]: number[]};
}


export const categoryReducer = (currentState: CategoryState = initialState, action: MyAction): CategoryState => {

};










export interface Category {
  id: number;
  title: string;
}


const videos = state.videos[10].map(id => videoState.entities[id]);


