import {MyAction} from './index';
import {Video} from '../models/video.model';

export const VIDEO_UPDATE = '[Video] Update Action';
export const VIDEO_LIST_REQUEST = '[Video] List Request Action';
export const VIDEO_LIST_SUCCESS = '[Video] List Success Action';

export class VideoUpdateAction implements MyAction {
  readonly type = VIDEO_UPDATE;

  constructor(public payload: Video) {
  }
}

export class VideoListRequestAction implements MyAction {
  readonly type = VIDEO_LIST_REQUEST;
}


export class VideoListSuccessAction implements MyAction {
  readonly type = VIDEO_LIST_SUCCESS;

  constructor(public payload: Video[]) {
  }
}
