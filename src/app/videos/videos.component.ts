import { Component, OnInit } from '@angular/core';
import {InvidzService} from '../services/invidz.service';

@Component({
  selector: 'ck-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any[];

  constructor(private invidzService: InvidzService) { }

  ngOnInit() {
    this.invidzService.getVideos().subscribe(responseBody => {
      this.videos = responseBody.data;
    });
  }

}
