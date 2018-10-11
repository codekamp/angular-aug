import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {getUser, RootState} from '../reducers/index';
import {InvidzService} from '../services/invidz.service';
import {select, Store} from '@ngrx/store';
import {catchError, map, switchMap, take} from 'rxjs/internal/operators';
import {UserAddAction} from '../actions/user';

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

    return this.store.pipe(select(getUser), take(1), switchMap(user => {
      if (user) {
        return of(true);
      } else {
        return this.service.getMe().pipe(map(usr => {
            this.store.dispatch(new UserAddAction(user));
            return true;
          }),
          catchError(error => {
            console.log('catchError Called');
            localStorage.removeItem('my_token');
            this.router.navigateByUrl('/login');
            return of(false);
          }));
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


// a.map.filter.catchError.switchmap.

// export class Observable {
//   map(inputFunc: (any) => any): Observable<any> {
//     const myObs = new Subject();
//
//     this.subscribe(value => {
//       const outputValue = inputFunc(value);
//       myObs.next(outputValue);
//     });
//
//     return myObs;
//   }
//
//   switchMap(inputFunc: (any) => Observable): Observable {
//     const myObs = new Subject();
//     const innerObs;
//
//     this.subscribe(value => {
//       if (innerObs) {
//         innerObs.unsubscribe();
//       }
//       innerObs = inputFunc(value);
//       innerObs.subscribe(item => myObs.next(outputValue));
//     });
//
//     return myObs;
//   }
//
//   mergeMap(inputFunc: (any) => Observable): Observable {
//     const myObs = new Subject();
//
//     this.subscribe(value => {
//       const innerObs = inputFunc(value);
//       innerObs.subscribe(item => myObs.next(outputValue));
//     });
//
//     return myObs;
//   }
// }
//
// const mapInput1 = value => value.length;
// const mapInput2 = value => value * value;
// const o1 = a.map(mapInput1); // hello, world, abc, xyz
// const o2 = b.map(mapInput2); // 1, 10, 25
