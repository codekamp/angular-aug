import {Video} from '../models/video.model';
import {MyAction} from '../actions/index';














export interface VideoState {
  ids: number[];
  entities: {[id: number]: Video};
}

export const initialState = {

};

export const videoReducer = (currentState: VideoState = initialState, action: MyAction): VideoState => {

};



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
