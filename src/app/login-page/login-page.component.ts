import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'ck-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('uname') usernameField: ElementRef;
  @ViewChild('pswd') passwordField: ElementRef;

  constructor(private  loginService: LoginService) {
  }

  ngOnInit() {
  }

  login() {
    const username = this.usernameField.nativeElement.value;
    const password = this.passwordField.nativeElement.value;

    this.loginService.login(username, password);
  }

}


// Approaches to pass data from template inputs to typescript code:
// 1. create template variables (#xyz) and then pass those to method.
// 2. ViewChildren/ViewChild
// 3. FormControls (later)
