import {Component, OnInit} from '@angular/core';
import {RatingComponent} from './components/rating/rating.component';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AwesomeSocial';

  courseRating = 3;
  teacherRating = 4;

  navigating = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.navigating = true;
      } else if (event instanceof NavigationEnd) {
        this.navigating = false;
      }
    });
  }

  static hello(): RatingComponent {
    return new RatingComponent();
  }

  saveCourseRating(rating: number) {
    console.log('saveCourseRating called ', rating);
  }


  saveTeacherRating(rating: number) {
    console.log('saveTeacherRating called ', rating);
  }
}

// https://cssreference.io/flexbox
