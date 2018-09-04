import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, reduce} from 'rxjs/internal/operators';

@Component({
  selector: 'ck-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  usernameControl = new FormControl();
  passwordControl = new FormControl();

  constructor(private  loginService: LoginService) {
  }

  ngOnInit() {
    const a = this.usernameControl.valueChanges;

    const b = a.pipe(debounceTime(2000), distinctUntilChanged());

    b.subscribe(val => {
      console.log('auto save value', val);
    });









    b.pipe(reduce((x, y) => x + y, 30)).subscribe(value => console.log(value));

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

    const username = this.usernameControl.value;
    const password = this.passwordControl.value;

    this.loginService.login(username, password);
  }

}


// Approaches to pass data from template inputs to typescript code:
// 1. create template variables (#xyz) and then pass those to method.
// 2. ViewChildren/ViewChild
// 3. FormControls (later)
