import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ck-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

// <ck-rating [rating]="4"></ck-rating>
  @Input() rating = 0;

// <ck-rating (ratingChange)="someFunction($event)"></ck-rating>
// @Output() can only be applied on varaibles of type EventEmitter
  @Output() ratingChange = new EventEmitter<number>();

  constructor() {
    console.log('constructor RatingComponent');

    console.log('In constructor rating is', this.rating);
  }

  ngOnInit() {
    console.log('In ngOnInit rating is', this.rating);
  }

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
