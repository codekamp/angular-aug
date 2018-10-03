import {MyAction} from './index';
import {Video} from '../models/video.model';

export const VIDEO_UPDATE = '[Video] Update Action';
export const VIDEO_LIST = '[Video] List Action';

export class VideoUpdateAction implements MyAction {
  readonly type = VIDEO_UPDATE;

  constructor(public payload: Video) {
  }
}

export class VideoListAction implements MyAction {
  readonly type = VIDEO_UPDATE;

  constructor(public payload: Video[]) {
  }
}
