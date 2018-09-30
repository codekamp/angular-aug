import {Video} from '../models/video.model';
import {MyAction} from '../actions/index';
import {VIDEO_UPDATE} from '../actions/video.action';














export interface VideoState {
  ids: number[];
  entities: {[id: number]: Video};
  categories: {[id: number]: number[]};
}

export const initialState: VideoState = {
  ids: [],
  entities: {},
  categories: {}
};

export const videoReducer = (currentState: VideoState = initialState, action: MyAction): VideoState => {
  switch (action.type) {
    case VIDEO_UPDATE:
      // const newState = {...currentState};
      // newState.entities = {...currentState.entities};
      // newState.entities[action.payload.id] = action.payload;
      // return newState;

      return {
        ...currentState,
        entities: {...currentState.entities, [action.payload.id]: action.payload}
      };
    default:
  }
};

export const _getVideoEntities = (state: VideoState) => state.entities;



//
// let a3: Video;
//
// a3 = {id: 20, title: '10 things you will never...', duration: 190, a: 'hello'};
//
//
// const xyz: VideoState = {
//   ids: [10, 20, 30],
//   entities: {
//     10: {},
//     20: {},
//     30: {}
//   }
// };
//
// const ids = 'entities';
//
// const ids = xyz['hello world']; // xyz.hello world
