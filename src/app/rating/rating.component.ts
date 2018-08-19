import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ck-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  rating = 0;

  @Output() ratingChange = new EventEmitter<number>();

  getImageUrlForStar(position: number): string {
    return position > this.rating ?
      '/assets/images/empty-star.png' :
      '/assets/images/filled-star.png';
  }

  onStarClick(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
    console.log('onStarClick of RatingComponent with rating ' + rating);
  }
}


// https://github.com/codekamp
