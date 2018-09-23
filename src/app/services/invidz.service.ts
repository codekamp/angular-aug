// What you want to do?
// 1. URL
// 2. Request method - GET/POST/PUT/PATCH/DELETE
// 3. What data to send?
// 4  How to send data? Data can be send either in:
//         a. Query Parameters - key/value
//         b. Headers - key/value
//         c. Body (not available in GET/OPTIONS requests)
//              form data
//              url encoded,
//              json,
//              xml and so on.


// 5. parse response.


// 1. https://api.invidz.com/api/authenticate
// 2. GET
// 3. email and password.
// 4. Query Params. email key and password key.


// videos list - GET /videos - ?limit=20&page=3
// individual video - GET /videos/:id - query params
// add a new video - POST /videos - body
// Update a video - PATCH /videos/:id - body
// Replace a video - PUT /videos/:id - body
// Delete a video - DELETE /videos/:id

// Success status code 200 - 299

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Video} from '../models/video.model';
import {map} from 'rxjs/internal/operators';
import {User} from '../models/user.model';
import {Store} from '@ngrx/store';
import {RootState} from '../reducers/index';
import {UserAddAction} from '../actions/user';

@Injectable()
export class InvidzService {
  constructor(private http: HttpClient, private store: Store<RootState>) {
  }

  login(email: string, pswd: string): Observable<User> {
    return this.http.get<{user: User, token: string}>('https://api.invidz.com/api/authenticate', {
      params: {email: email, password: pswd}
    }).pipe(map(response => {
      localStorage.setItem('my_token', response.token);
      const user: User = response.user;
      this.store.dispatch(new UserAddAction(user));
      return user;
    }));
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<{data: Video[]}>('https://api.invidz.com/api/videos', {
      headers: {Authorization: 'bearer ' + localStorage.getItem('my_token')}
    }).pipe(map(response => response.data));
  }

  getMe(): Observable<User> {
    return this.http.get<{data: User}>('https://api.invidz.com/api/me', {
      headers: {Authorization: 'bearer ' + localStorage.getItem('my_token')}
    }).pipe(map(response => {
      const user: User = response.data;
      this.store.dispatch(new UserAddAction(user));
      return user;
    }));
  }
}

// Redux

// 1. state (interface just like models) - Big object which stores all the data.

// 2. store (class from ngrx lib) - Object which manages the state. All read/write operations of state
//  ...will go through store.

// 3. Action (Class) and dispatch - whenever we will want to do any write operation on state
//  ... we call store.dispatch(action). dispatch takes objects of Action Classes.
// ... Action is Class with two keys/variables, type:string and payload:any.

// if(action instanceof UserDeleteAction) {
//     delete user with id action.payload
// }

// if(action.type === 'USER_DELETE_ACTION') {
//     delete user with id action.payload
// }


// 4. selectors (functions) and select - Whenever we want to read data from state, we call
// ... store.select(). select takes a selector function in parameter. Selector
// ... is a function which takes whole state in paramter and returns a part of it.

// const getUser = (state) => state.user;

// getUser(state)
// store.select(getUser): BehaviourSubject<User>
// store.select(getUser).subscribe(user => console.log(user));

// 5. Reducer (single function) - function that is called by store whenever an action
// ... is dispatched. It's the function that writes data to state.
// ...Reducer function takes two paratmers: current state and dispatched action.
// ... reducer is a non mutating function.


export interface State {
  user: User;
  videos: Video[];
  selectedUserTab: number;
}

export class UserDeleteAction {
  readonly type = 'USER_DELETE';

  constructor(payload: number) {
  }
}

export class MarkUserAsOnlineAction {
  readonly type = 'MARK_USER_AS_ONLINE';

  constructor(payload: number) {
  }
}


export class AddUserAction {
  readonly type = 'ADD_USER';

  constructor(payload: User) {
  }
}

