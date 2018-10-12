import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgot: any = {};
  forgotForm: FormGroup;
  emailRequired: string = 'Email is required';
  emailInvalid: string = 'Email is invalid';
  public formSubmitAttempt: boolean;

  constructor(fb: FormBuilder) {
    const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.forgotForm = fb.group({
      'email': ['', [Validators.required, <any>Validators.pattern(emailRegex)]],
    })
  }

  ngOnInit() {
  }

  requestLink() {
    this.formSubmitAttempt = true;
    if(this.forgot.email) {
       console.log(this.forgot.email);
    }
  }

}
