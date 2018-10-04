import {ActionReducerMap, createSelector} from '@ngrx/store';
import {_getUser, userReducer, UserState} from './user';
import * as fromVideo from './videos';
import * as fromCategory from './category';
import {Video} from '../models/video.model';


export interface RootState {
  user: UserState;
  myvideos: fromVideo.VideoState;
  category: fromCategory.CategoryState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  user: userReducer,
  myvideos: fromVideo.videoReducer,
  category: fromCategory.categoryReducer
};


export const getUserState = (state: RootState) => state.user;
export const getVideoState = (state: RootState) => state.myvideos;
export const getCategoryState = (state: RootState) => state.category;


export const {
  selectIds: getVideoIds,
  selectEntities: getVideoEntities,
  selectAll: getVideos,
  selectTotal: getVideoCount
} = fromVideo.videoStateAdapter.getSelectors(getVideoState);

export const getCategoryIds = createSelector(getCategoryState, fromCategory._getIds);
export const getCategoryEntities = createSelector(getCategoryState, fromCategory._getEntities);
export const getVideoIdsByCategory = createSelector(getCategoryState, fromCategory._getVideoIdsMap);

export const getVideosByCategory = createSelector(getVideoIdsByCategory, getVideoEntities,
  (idsMapping, entities) => {
    Object.keys(idsMapping).reduce((previous, id) => {
      const videoIds = idsMapping[id];
      const videos: Video[] = videoIds.map(vidId => entities[vidId]);
      return {...previous, [id]: videos};
    }, {});
  }
);

export const getVideosLoaded = createSelector(getVideoState, fromVideo._getLoaded);
export const getVideosLoading = createSelector(getVideoState, fromVideo._getLoading);
export const getUser = createSelector(getUserState, _getUser);

// createSelector ki kahani:
// if you want to combine n functions using create selector, pass it n+1 functions
// first n parameters will be function that will be combined
// (n + 1)th  function will be the function which will determine how
// ... first n functions will be combined

// parameter type of first n functions should be same. Return type can differ.
// parameter type of (n + 1)th function is output of first n function.

// the Output function's parameter type will be same as paramter type
// ... of n functions
// output will be same as output of last/(n+1)th function







