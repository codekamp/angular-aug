import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Video} from '../../models/video.model';
import {VideoManager} from '../../managers/video.manager';

@Component({
  selector: 'ck-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent implements OnInit {

  videos: Video[];
  loading: boolean;

  constructor(private videoManager: VideoManager, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.videoManager.getVideos().subscribe(videos => this.videos = videos);
    this.videoManager.getVideosLoading().subscribe(loading => {
      this.loading = loading;
      this.cdr.markForCheck();
    });
  }

  videoClicked(id: number) {
    console.log('video clicked: ' + id);
  }

  isLoading(): boolean {
    console.log('isLoading called');
    return this.loading;
  }

}
