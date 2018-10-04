import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ck-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, AfterViewInit, OnChanges, DoCheck {

// <ck-rating [rating]="4"></ck-rating>

  private _rating = 0;

  @Input()
  set rating(r: number) {
    this._rating = r;
    console.log('setter run the code that you want on rating chagne');
  }

  get rating(): number {
    return this._rating;
  }

  @Input() something = 'Hello';

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

  ngAfterViewInit() {
    console.log('RatingComponent ngAfterViewInit');

  //  https://material.io/design/introduction/
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('RatingComponent ngOnChanges', changes);
    //
    // The following values are always falsy:
    //   false.
    // 0 (zero)
    // '' or "" (empty string)
    // null.
    // undefined.
    // NaN (e.g. the result of 1/0 )

    // if (changes['rating']) {
    //   console.log('run the code that you want on rating chagne');
    // }
  }

  ngDoCheck() {
    console.log('RatingComponent ngDoCheck');
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
