import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, switchMap, take, takeUntil} from 'rxjs/internal/operators';
import {BehaviorSubject, interval, Subject, Subscription} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'ck-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends BaseComponent implements OnInit {

  usernameControl = new FormControl();
  passwordControl = new FormControl();
  mySubject = new Subject<number>();
  helloSubject = new BehaviorSubject<number>(10);

  constructor(private  loginService: LoginService, private http: HttpClient) {
  }

  ngOnInit() {
    const a = this.usernameControl.valueChanges;

    const b = a.pipe(debounceTime(1000), distinctUntilChanged());

    b.pipe(takeUntil(this.alive$)).subscribe(keyword => {
      this.http.get('http')
        .subscribe(result => console.log(result));
    });

    const e = b.pipe(switchMap(keyword => this.http.get('http')));

    // 'c' will be observable of observable
    // function passed to map can have any return type
    const c = a.pipe(map(x => interval(x.length * 100)));

    // 'd' will be observable of number
    // function passed to switchMap can only return observable
    const d = a.pipe(switchMap(x => interval(x.length * 100)));

    c.subscribe(value => {
      console.log('fired on c', value);
      value.pipe(take(5)).subscribe(v => console.log('value is', v));
    });

    // const uObs = this.usernameControl.valueChanges.pipe(startWith(null));
    // const pObs = this.passwordControl.valueChanges.pipe(startWith(null));

    // const output = uObs.pipe(combineLatest(pObs, (uname, pswd) => {
    //   return {u: uname, p: pswd};
    // }));

    // const output = combineLatest(uObs, pObs, (uname, pswd) => {
    //   return {u: uname, p: pswd};
    // });
    // output.subscribe(data => console.log('combined data is', data));
  }

  login() {
    // const username = this.usernameField.nativeElement.value;
    // const password = this.passwordField.nativeElement.value;

    this.mySubject.next(10);

    this.mySubject.asObservable();

    this.mySubject.subscribe(value => console.log(value));

    const username = this.usernameControl.value;
    const password = this.passwordControl.value;

    this.loginService.login(username, password);
  }
}


// Approaches to pass data from template inputs to typescript code:
// 1. create template variables (#xyz) and then pass those to method.
// 2. ViewChildren/ViewChild
// 3. FormControls (later)
