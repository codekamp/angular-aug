import {Component} from '@angular/core';
import {RatingComponent} from './rating/rating.component';

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AwesomeSocial';

  courseRating = 3;
  teacherRating = 4;

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
