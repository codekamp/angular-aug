import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {getUser, RootState} from '../reducers/index';
import {InvidzService} from '../services/invidz.service';
import {select, Store} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/internal/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<RootState>, private service: InvidzService) {
  }

  canActivate(): Observable<boolean> | boolean {

    const token = localStorage.getItem('my_token');
    if (!token) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return this.store.pipe(select(getUser), switchMap(user => {
      if (user) {
        return of(true);
      } else {
        return this.service.getMe().pipe(map(() => of(true),
          catchError(error => {
            console.log('catchError Called');
            localStorage.setItem('my_token', null);
            this.router.navigateByUrl('/login');
            return of(of(false));
          })));
      }
    }));


    // getFriends(id: number): Observable<User[]>;

    // map ke andar vala function is returning Observable<User[]>

    // what is map returning? Observable<Observable<User[]>>
    //
    // return this.store.pipe(select(getUser), map(user => this.service.getFriends(user.id)))
    //   .subscribe(obs => obs.subscribe())


    // what is switchMap returning? Observable<User[]>
    // return this.store.pipe(select(getUser), switchMap(user => this.service.getFriends(user.id)));
  }
}
