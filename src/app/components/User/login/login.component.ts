
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { ILogin } from '../user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
   loginUser: any = {
    email: '',
    password: '',
  };
  registerUser: any = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '', 
    mobile: ''
  };
  customer: Object = {};
  errorLogin: string;
  errorLoginT = false;
  errorRegister = false;
  loggedIn: Boolean = false;
  loading: boolean = false;
  is_customer: boolean = false;
  not_customer: boolean = false;
  @Output() notifyLogin: EventEmitter<Boolean> = new EventEmitter<Boolean>();


   loginAttempt: boolean;
   registerAttempt: boolean;

  constructor(fb: FormBuilder, private userSrv: UserService, private router: Router) {
    // let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.loginForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    });
    this.registerForm = fb.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'email': ['', Validators.required,],
      'password': ['', [Validators.required, Validators.minLength(8)]],
      'confirmPassword': ['', [Validators.required, Validators.minLength(8)]],
      'mobile': ['', Validators.required],
    }, { validator: this.checkPasswords });
  }


  checkPasswords(group: FormGroup) {

    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmPassword'].value;

    return pass === confirmPass ? null : { notSame: true }
  }



  ngOnInit() {

  }

  login() {

    this.loginAttempt = true;
    if (this.loginForm.valid) {

      this.loading = true;

      this.userSrv.login(this.loginUser).subscribe(res => {

        console.log(res);

        if (res.data.user.is_customer === true) {

          localStorage.setItem('token', res.data.token);
          localStorage.setItem('customer', JSON.stringify(res.data.user));
          this.customer = res.data.user;
          this.loggedIn = true;
          this.notifyLogin.emit(this.loggedIn);
          this.router.navigateByUrl('/');
          this.loading = false;
        } else {

          this.not_customer = true;
        }
      }, err => {
        this.errorLogin = 'password rejected';
        this.errorLoginT = true;
        console.log(err);
        this.loading = false;
      });
      this.loading = false;
    }
  }

  register() {

    this.registerAttempt = true;
    if (this.registerForm.valid) {

      this.loading = true;

      this.userSrv.register(this.registerForm.value)
        .subscribe(res => {

          if (res.data.user.is_customer === true) {

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('customer', JSON.stringify(res.data.user));
            this.customer = res.data.user;
            this.loggedIn = true;
            this.notifyLogin.emit(this.loggedIn);
            this.router.navigateByUrl('/');
            this.loading = false;
          } else {
  
            this.not_customer = true;
          }
        }, err => {
          this.errorRegister = true;
          console.log(err);
          this.loading = false;
        });
      this.loading = false;
    };
  }

}
