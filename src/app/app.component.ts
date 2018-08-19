import { Component } from '@angular/core';

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AwesomeSocial';

  saveCourseRating(rating: number) {
    console.log('saveCourseRating called ', rating);
  }


  saveTeacherRating(rating: number) {
    console.log('saveTeacherRating called ', rating);
  }
}
