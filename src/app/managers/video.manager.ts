import {Injectable} from '@angular/core';
import {Video} from '../models/video.model';
import {take} from 'rxjs/internal/operators';
import {InvidzService} from '../services/invidz.service';
import {select, Store} from '@ngrx/store';
import {getVideos, getVideosLoaded, getVideosLoading, RootState} from '../reducers/index';
import {VideoListRequestAction, VideoListSuccessAction} from '../actions/video.action';
import {combineLatest, Observable} from 'rxjs/index';

@Injectable()
export class VideoManager {

  constructor(private invidzService: InvidzService, private store: Store<RootState>) {
  }

  getVideos(): Observable<Video[]> {
    const loaded$ = this.store.pipe(select(getVideosLoaded));
    const loading$ = this.store.pipe(select(getVideosLoading));

    combineLatest(loaded$, loading$, (loading, loaded) => loading || loaded)
      .pipe(take(1)).subscribe(loadingOrLoaded => {
      if (!loadingOrLoaded) {
        this.store.dispatch(new VideoListRequestAction());
        this.invidzService.getVideos().subscribe(vids => {
          this.store.dispatch(new VideoListSuccessAction(vids));
        });
      }
    });

    return this.store.pipe(select(getVideos));
  }

  getVideosLoading(): Observable<boolean> {
    return this.store.pipe(select(getVideosLoading));
  }
}
