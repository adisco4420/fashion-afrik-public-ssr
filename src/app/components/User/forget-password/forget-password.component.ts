import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email: any;
  constructor() { }

  ngOnInit() {
    this.forgetPassword(this.email);
  }
  forgetPassword(e) {
    console.log(e);
  }
  sendMail() {

  }

}
