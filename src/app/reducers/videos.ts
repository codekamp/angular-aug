import {Video} from '../models/video.model';
import {MyAction} from '../actions/index';
import {VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS, VIDEO_UPDATE} from '../actions/video.action';
import {createEntityAdapter, EntityState} from '@ngrx/entity';


export interface VideoState extends EntityState<Video> {
  categories: { [id: number]: number[] };
  loaded: boolean;
  loading: boolean;
}

export const videoStateAdapter = createEntityAdapter<Video>({
  selectId: video => video.id
});

export const initialState: VideoState = videoStateAdapter.getInitialState({
  categories: {},
  loaded: false,
  loading: false
});

export const videoReducer = (currentState: VideoState = initialState, action: MyAction): VideoState => {
  switch (action.type) {
    case VIDEO_UPDATE:
      // return {
      //   ...currentState,
      //   entities: {...currentState.entities, [action.payload.id]: action.payload}
      // };

      return videoStateAdapter.updateOne({id: action.payload.id, changes: action.payload}, currentState);
    case VIDEO_LIST_REQUEST: {
      return {...currentState, loading: true};
    }
    case VIDEO_LIST_SUCCESS: {
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

      return videoStateAdapter.addMany(action.payload, {...currentState, loaded: true, loading: false});
    }

    // case LOGOUT:
      // const newState = videoStateAdapter.removeAll(currentState);
      // return {...newState, categories: {}};

      //
      // const newState = {...currentState, categories: {}};
      // return videoStateAdapter.removeAll(newState);

      // return videoStateAdapter.removeAll({...currentState, categories: {}});
    default:
      return currentState;
  }
};

export const _getCategoriesIdMap = (state: VideoState) => state.categories;
export const _getLoaded = (state: VideoState) => state.loaded;
export const _getLoading = (state: VideoState) => state.loading;


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
