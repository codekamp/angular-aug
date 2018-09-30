import {ActionReducerMap, createSelector} from '@ngrx/store';
import {userReducer, UserState} from './user';
import {videoReducer, VideoState} from './videos';
import {_getIds, categoryReducer, CategoryState} from './category';
import {Video} from '../models/video.model';
import {Observable} from 'rxjs/index';


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


export const getVideosByCatagory = (state: RootState): Observable<{ [id: number]: Video[] }> => {
  const categoryIds: number[] = _getIds(state.category);

  return categoryIds.reduce((videoMap, catId) => {
    const videoIds: number[] = state.category.videos[catId];
    const videos: Video[] = videoIds.map(vidId => state.videos.entities[vidId]);
    return {...videoMap, [catId]: videos};
  }, {});
};


// if you want to combine n functions using create selector, pass it n+1 functions
// first n parameters will be function that will be combined
// (n + 1)th  function will be the function which will determine how
// ... first n functions will be combined

// parameter type of first n functions should be same. Return type can differ.
// parameter type of (n + 1)th function is output of first n function.

// the Output function's parameter type will be same as paramter type
// ... of n functions
// output will be same as output of last/(n+1)th function
const outputFunc = createSelector();




// this.store.select(getVideosByCatagory).subscribe(data => console.log(data));


const myArray = [10, 20, 30];
const anotherArray = [1, 2, 3, 4, 5, 6, 99, 101, 102];

const oddArray = anotherArray.filter(value => value % 2 !== 0);


const oddArrayFunc = () => anotherArray.filter(value => value % 2 !== 0);


// 30, 20, 10, 10, 20, 30
const output = myArray.reduce((previous, current) => [current, ...previous, current], []);

const xyz = {a: myArray, b: anotherArray};
const abc = {a: myArray, b: anotherArray};

const a = 'hello';

xyz.a[0] = -99; // xyz.a is -99, 20, 30
// abc.a is -99, 20, 30

xyz.a = [-99, -1]; // xyz.a is -99, -1
// abc.a is  -99, 20, 30

// xyz === abc is false
// xyz.a === abc.a is true

// 10 == '10' is true
// 10 === '10' is false

// ('' == false) is true
// ('' === false) is false







