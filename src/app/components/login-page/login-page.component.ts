import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../base.component';
import {Validators as MyValidtors} from '../../validators';
import {Router} from '@angular/router';
import {InvidzService} from '../../services/invidz.service';
import {MatSnackBar} from '@angular/material';

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

  constructor(private  invidzService: InvidzService,
              private router: Router,
              private snackbar: MatSnackBar) {
    super();
  }

  ngOnInit() {
    this.usernameControl = new FormControl(null, [Validators.required, Validators.email]);
    this.passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

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

    this.invidzService.login(username, password).subscribe(user => {
      this.router.navigate(['videos']);
    }, errorResponse => {
      console.log('error response is', errorResponse);
      const popup = this.snackbar.open(errorResponse.error.message, null, {
        duration: 5000,
        verticalPosition: 'top'
      });
    });

    console.log('login function completed');

    // this.router.navigate(['videos']);
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
