import {Subject} from 'rxjs/index';
import {OnDestroy} from '@angular/core';

export class BaseComponent implements OnDestroy {
  protected alive$ = new Subject<boolean>();

  ngOnDestroy() {
    this.alive$.next(true);
    this.alive$.complete();
  }
}
