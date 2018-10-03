import {Video} from '../models/video.model';
import {MyAction} from '../actions/index';
import {VIDEO_LIST, VIDEO_UPDATE} from '../actions/video.action';
import {createEntityAdapter, EntityState} from '@ngrx/entity';


export interface VideoState extends EntityState<Video> {
  // ids: number[];
  // entities: { [id: number]: Video };
  categories: { [id: number]: number[] };
}

export const videoStateAdapter = createEntityAdapter<Video>({
  selectId: video => video.id
});

export const initialState: VideoState = videoStateAdapter.getInitialState({
  categories: {}
});

export const videoReducer = (currentState: VideoState = initialState, action: MyAction): VideoState => {
  switch (action.type) {
    case VIDEO_UPDATE:
      return {
        ...currentState,
        entities: {...currentState.entities, [action.payload.id]: action.payload}
      };

      return videoStateAdapter.updateOne({id: action.payload.id, changes: action.payload}, currentState);
    case VIDEO_LIST: {
      // const videoIds = action.payload.map(video => video.id);
      //
      // const entities = videoIds.reduce((previous, videoId, index) => {
      //   return {...previous, [videoId]: action.payload[index]};
      // }, {});
      //
      // return {
      //   ...currentState,
      //   ids: videoIds,
      //   entities: entities
      // };

      return videoStateAdapter.addMany(action.payload, currentState);
    }

    case LOGOUT:
      // const newState = videoStateAdapter.removeAll(currentState);
      // return {...newState, categories: {}};

      //
      // const newState = {...currentState, categories: {}};
      // return videoStateAdapter.removeAll(newState);

      return videoStateAdapter.removeAll({...currentState, categories: {}});
    default:
      return currentState;
  }
};

export const _getCategoriesIdMap = (state: VideoState) => state.categories;


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
