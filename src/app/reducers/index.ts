import {ActionReducerMap, createSelector} from '@ngrx/store';
import {userReducer, UserState} from './user';
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


// export const getVideosByCatagory = (state: RootState): Observable<{ [id: number]: Video[] }> => {
//   const categoryIds: number[] = fromCategory._getIds(state.category);
//
//   return categoryIds.reduce((videoMap, catId) => {
//     const videoIds: number[] = state.category.videos[catId];
//     const videos: Video[] = videoIds.map(vidId => state.videos.entities[vidId]);
//     return {...videoMap, [catId]: videos};
//   }, {});
// };


export const getUserState = (state: RootState) => state.user;
export const getVideoState = (state: RootState) => state.myvideos;
export const getCategoryState = (state: RootState) => state.category;


const fourSelectors = fromVideo.videoStateAdapter.getSelectors(getVideoState);

const {getIds, getEntities} = fourSelectors;

const a = 100;
const b = 99;

const hello = {a, b}; // {a: 100, b: 99}
const hello = {a: b, b: a}; // {a: 99, b: 100}

const data = {x: 99, y: 130, z: 400};
const {x, y} = data; // const x = data.x; const y = data.y;


console.log(x);

export const getVideoIds = createSelector(getVideoState, fromVideo._getIds);
export const getVideoEntities = createSelector(getVideoState, fromVideo._getEntities);

export const getCategoryIds = createSelector(getCategoryState, fromCategory._getIds);
export const getCategoryEntities = createSelector(getCategoryState, fromCategory._getEntities);
export const getVideoIdsByCategory = createSelector(getCategoryState, fromCategory._getVideoIdsMap);

export const getVideosByCatagory = createSelector(getVideoIdsByCategory, getVideoEntities,
  (idsMapping, entities) => {
    Object.keys(idsMapping).reduce((previous, id) => {
      const videoIds = idsMapping[id];
      const videos: Video[] = videoIds.map(vidId => entities[vidId]);
      return {...previous, [id]: videos};
    }, {});
  }
);

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

// Object.keys(xyz) will be ['a', 'b']

// Object.keys(videoEntities)  will be array of numbers

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







