import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../base.component';
import {Validators as MyValidtors} from '../validators';
import {Router} from '@angular/router';

@Component({
  selector: 'ck-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends BaseComponent implements OnInit {

  signup: boolean;

  loginForm: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;

  constructor(private  loginService: LoginService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.usernameControl = new FormControl(null, [Validators.required, MyValidtors.mobile, Validators.pattern('([A-Z])\\w+')]);
    this.passwordControl = new FormControl(null, [Validators.required, MyValidtors.minLength(5)]);

    this.loginForm = new FormGroup({
      uname: this.usernameControl,
      pswd: this.passwordControl,
    });

    this.loginForm.valueChanges.subscribe(data => console.log(data));
  }

  login() {
    const username = this.usernameControl.value;
    const password = this.passwordControl.value;

    console.log(this.loginForm.value);

    // window.location.href = '/dashboard';

    // this.router.navigateByUrl('/dashboard');
    this.router.navigate(['dashboard']);
  }
}


// Approaches to pass data from template inputs to typescript code:
// 1. create template variables (#xyz) and then pass those to method.
// 2. ViewChildren/ViewChild
// 3. FormControls
// 4. two way data binding (later)


// 4242 4242 4242 4242
// cvv - 123
// expiry date - 12/21
