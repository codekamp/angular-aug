import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from './user';
import {videoReducer, VideoState} from './videos';
import {categoryReducer, CategoryState} from './category';
import {Video} from '../models/video.model';


export interface RootState {
  user: UserState;
  videos: VideoState;
  category: CategoryState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  user: userReducer,
  videos: videoReducer,
  category: categoryReducer
};


export const getVideosByCatagory = (state: RootState) => {
  const categoryIds: number[] = state.category.ids;

  return categoryIds.map(catId => {
    const videoIds: number[] = state.category.videos[catId];
    const videos: Video[] = videoIds.map(vidId => state.videos.entities[vidId]);
    return videos;
  });
}






