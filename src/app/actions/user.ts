import {User} from '../models/user.model';
import {MyAction} from './index';

export class UserAddAction implements MyAction {

  readonly type = 'USER_ADD';

  constructor(public payload: User) {
  }
}

export class UserDeleteAction implements MyAction {

  readonly type = 'USER_DELETE';

  constructor() {
  }
}
