import { Component, OnInit } from '@angular/core';
import {InvidzService} from '../services/invidz.service';
import {Video} from '../models/video.model';

@Component({
  selector: 'ck-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[];

  constructor(private invidzService: InvidzService) { }

  ngOnInit() {
    this.invidzService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

}
