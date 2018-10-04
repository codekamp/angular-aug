import {Component, OnInit} from '@angular/core';
import {Video} from '../../models/video.model';
import {VideoManager} from '../../managers/video.manager';

@Component({
  selector: 'ck-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[];
  loading: boolean;

  constructor(private videoManager: VideoManager) {
  }

  ngOnInit() {
    this.videoManager.getVideos().subscribe(videos => this.videos = videos);
    this.videoManager.getVideosLoading().subscribe(loading => this.loading = loading);
  }

}
