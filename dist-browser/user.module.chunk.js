webpackJsonp(["user.module"],{

/***/ "./src/app/components/User/forget-password/forget-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart]=\"cart\"></app-header>\n\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <form >\n          <input type=\"text\" class=\"formcontrol\" placeholder=\"enter your email\">\n           <input type=\"submit\" class=\"btn btn-primary\" value=\"verfiy email\">\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/User/forget-password/forget-password.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/User/forget-password/forget-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent() {
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__("./src/app/components/User/forget-password/forget-password.component.html"),
            styles: [__webpack_require__("./src/app/components/User/forget-password/forget-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/User/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart]=\"cart\"></app-header>\r\n<section class=\"jumbotron\">\r\n\t<div class=\"inner-content text-center\">\r\n\t\t<h4 class=\"boldest\">\r\n\t\t\tAccount\r\n\t\t</h4>\r\n\t\t<span *ngIf=\"not_customer\" style=\"color: #FFF; background: #EB5757; padding: 10px; position: relative; top: 20px;\">\r\n\t\t\taccount does not have permission for this site\r\n\t\t</span>\r\n\t</div>\r\n</section>\r\n<section class=\"padded\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t<h4 class=\"form-title\">LOGIN</h4>\r\n\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"loginForm\" novalidate>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"loginUser.email\" [formControl]=\"loginForm.controls['email']\"\r\n\t\t\t\t\t\t\t pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$\" placeholder=\"Email Address\">\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"loginForm.controls['email'].hasError('required') && loginAttempt\" style=\"color: red\">Email is required</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"loginForm.controls['email'].hasError('pattern')  && loginAttempt\" style=\"color: red\">Email is invalid. Format should be john@doe.com.</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"loginUser.password\" [formControl]=\"loginForm.controls['password']\"\r\n\t\t\t\t\t\t\t placeholder=\"Password\">\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"loginForm.controls['password'].hasError('required') && loginAttempt\" style=\"color: red\">Password is required</div>\r\n\r\n\t\t\t\t\t\t\t<p class=\"float-right\">\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/forget-password\" style=\"font-size: 14px; margin: 10px 0; display: inline-block; color: #fff\">\r\n\t\t\t\t\t\t\t\t\tForgot your Password?\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-block btn-accent\" [disabled]=\"loading\">\r\n\t\t\t\t\t\tLogin\r\n\t\t\t\t\t\t<i class=\"fa fa-spinner fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-md-5 offset-md-2\">\r\n\t\t\t\t<h4 class=\"form-title\">Sign Up</h4>\r\n\t\t\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" class=\"registerForm\" novalidate>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerUser.first_name\" [formControl]=\"registerForm.controls['first_name']\"\r\n\t\t\t\t\t\t\t placeholder=\"First Name\">\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['first_name'].hasError('required') && registerAttempt\" style=\"color: red\">First Name is required</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerUser.last_name\" [formControl]=\"registerForm.controls['last_name']\"\r\n\t\t\t\t\t\t\t placeholder=\"Last Name\">\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['last_name'].hasError('required') && registerAttempt\" style=\"color: red\">Last Name is required</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" [(ngModel)]=\"registerUser.email\" [formControl]=\"registerForm.controls['email']\"\r\n\t\t\t\t\t\t\t pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$\" placeholder=\"Email Address\">\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['email'].hasError('required') && registerAttempt\" style=\"color: red\">Email is required</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['email'].hasError('pattern')  && registerAttempt\" style=\"color: red\">Email is invalid. Format should be john@doe.com.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"registerUser.password\" [formControl]=\"registerForm.controls['password']\"\r\n\t\t\t\t\t\t\t placeholder=\"Password\" required>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['password'].hasError('required') && registerAttempt\" style=\"color: red\">Password is required</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['password'].hasError('minlength') && registerAttempt\" style=\"color: red\">Password field must have a minimum of 8 characters</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"password\" name=\"confirmPassword\" class=\"form-control\" [(ngModel)]=\"registerUser.confirmPassword\" [formControl]=\"registerForm.controls['confirmPassword']\"\r\n\t\t\t\t\t\t\t placeholder=\"Confirm Password\" required>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['confirmPassword'].hasError('required') && registerAttempt\" style=\"color: red\">Confirm Password is required</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.hasError('notSame') && registerAttempt\" style=\"color: red\">Password fields should match</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['confirmPassword'].hasError('minlength') && registerAttempt\" style=\"color: red\">Password field must have a minimum of 8 characters</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"tel\" name=\"mobile\" class=\"form-control\" [(ngModel)]=\"registerUser.mobile\" [formControl]=\"registerForm.controls['mobile']\"\r\n\t\t\t\t\t\t\t placeholder=\"Mobile\" style=\"width: 100%; padding-left: 50px;\" required>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls['mobile'].hasError('required') && registerAttempt\" style=\"color: red\">Mobile is required</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-block btn-accent\" [disabled]=\"loading\">\r\n\t\t\t\t\t\t\tCreate an account\r\n\t\t\t\t\t\t\t<i class=\"fa fa-spinner fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/User/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".iradio_square {\n  margin-right: 15px !important;\n  display: inline-block; }\n\n.jumbotron {\n  margin: 0; }\n\n.jumbotron::after {\n  background: #C4C4C4;\n  opacity: 1; }\n\n.boldest {\n  font-size: 28px;\n  color: #000;\n  letter-spacing: 1.5px;\n  font-family: 'Montserrat'; }\n\n.padded {\n  background: #E0E0E0; }\n\n.padded .form-title {\n    color: #000;\n    font-weight: normal;\n    letter-spacing: 1.5px;\n    margin-bottom: 30px; }\n\n.padded form.loginForm {\n    margin-bottom: 80px; }\n\n.padded form .form-group {\n    margin-bottom: 15px; }\n\n.padded form .form-group .form-control::-webkit-input-placeholder {\n      font-style: normal;\n      text-transform: unset;\n      letter-spacing: 1.5px;\n      word-spacing: 1px;\n      font-size: 16px;\n      font-weight: 500; }\n\n.padded form .form-group .form-control:-ms-input-placeholder {\n      font-style: normal;\n      text-transform: unset;\n      letter-spacing: 1.5px;\n      word-spacing: 1px;\n      font-size: 16px;\n      font-weight: 500; }\n\n.padded form .form-group .form-control::-ms-input-placeholder {\n      font-style: normal;\n      text-transform: unset;\n      letter-spacing: 1.5px;\n      word-spacing: 1px;\n      font-size: 16px;\n      font-weight: 500; }\n\n.padded form .form-group .form-control::placeholder {\n      font-style: normal;\n      text-transform: unset;\n      letter-spacing: 1.5px;\n      word-spacing: 1px;\n      font-size: 16px;\n      font-weight: 500; }\n\n.padded form .form-group .form-control {\n      padding: 15px;\n      font-size: 16px;\n      border: none;\n      border-radius: 0;\n      outline: none;\n      letter-spacing: 1.5px;\n      font-weight: 500; }\n\n.padded form .form-group input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0 30px white inset; }\n\n.padded form button {\n    background: #FF473A;\n    border-radius: 0;\n    border: none;\n    padding: 20px;\n    font-weight: 500;\n    cursor: pointer; }\n\ninput[type='checkbox'] {\n  height: 0;\n  width: 0;\n  position: absolute;\n  opacity: 0; }\n\ninput[type='checkbox'] + label {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: .6em 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #686B68;\n  -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1); }\n\ninput[type='checkbox'] + label > ins {\n  position: absolute;\n  display: block;\n  bottom: 0;\n  left: 2em;\n  height: 0;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n  -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1);\n  transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1); }\n\ninput[type='checkbox'] + label > ins > i {\n  position: absolute;\n  bottom: 0;\n  font-style: normal;\n  color: #000; }\n\ninput[type='checkbox'] + label > span {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 9px;\n  width: 15px;\n  height: 15px;\n  background: transparent;\n  /* border: 2px solid #9E9E9E; */\n  border: 2px solid #686B68;\n  /* opacity: .7; */\n  border-radius: 2px;\n  cursor: pointer;\n  -webkit-transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1); }\n\ninput[type='checkbox'] + label:hover {\n  color: #333;\n  /* opacity: .7; */ }\n\n/* input[type='checkbox'] + label:hover > span, input[type='checkbox']:focus + label > span{\r\n    background: #000;\r\n} */\n\ninput[type='checkbox']:checked + label > ins {\n  height: 100%;\n  color: #000; }\n\n/* input[type='checkbox']:checked + label > span{\r\n    border: 2px solid #000;\r\n    animation: shrink-bounce 200ms cubic-bezier(.4,.0,.23,1);\r\n} */\n\ninput[type='checkbox']:checked + label > span:before {\n  content: \"\\f00c\";\n  position: absolute;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-decoration: inherit;\n  color: #686B68; }\n\n@-webkit-keyframes shrink-bounce {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  33% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes shrink-bounce {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  33% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes checkbox-check {\n  0% {\n    width: 0;\n    height: 0;\n    border-color: #212121;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  33% {\n    width: .2em;\n    height: 0;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  100% {\n    width: .2em;\n    height: .5em;\n    border-color: #212121;\n    -webkit-transform: translate3d(0, -0.5em, 0) rotate(45deg);\n            transform: translate3d(0, -0.5em, 0) rotate(45deg); } }\n\n@keyframes checkbox-check {\n  0% {\n    width: 0;\n    height: 0;\n    border-color: #212121;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  33% {\n    width: .2em;\n    height: 0;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  100% {\n    width: .2em;\n    height: .5em;\n    border-color: #212121;\n    -webkit-transform: translate3d(0, -0.5em, 0) rotate(45deg);\n            transform: translate3d(0, -0.5em, 0) rotate(45deg); } }\n\n:host ::ng-deep .intl-tel-input {\n  width: 100% !important; }\n"

/***/ }),

/***/ "./src/app/components/User/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/components/User/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, userSrv, router) {
        this.userSrv = userSrv;
        this.router = router;
        this.loginUser = {};
        this.registerUser = {};
        this.customer = {};
        this.loggedIn = false;
        this.loading = false;
        this.is_customer = false;
        this.not_customer = false;
        this.notifyLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.loginForm = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
        this.registerForm = fb.group({
            'first_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'last_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)]],
            'confirmPassword': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)]],
            'mobile': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        }, { validator: this.checkPasswords });
    }
    LoginComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls['password'].value;
        var confirmPass = group.controls['confirmPassword'].value;
        return pass === confirmPass ? null : { notSame: true };
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginAttempt = true;
        if (this.loginForm.valid) {
            this.loading = true;
            this.userSrv.login(this.loginUser).subscribe(function (res) {
                console.log(res);
                if (res.data.user.is_customer === true) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('customer', JSON.stringify(res.data.user));
                    _this.customer = res.data.user;
                    _this.loggedIn = true;
                    _this.notifyLogin.emit(_this.loggedIn);
                    _this.router.navigateByUrl('/');
                    _this.loading = false;
                }
                else {
                    _this.not_customer = true;
                }
            }, function (err) {
                console.log(err);
                _this.loading = false;
            });
            this.loading = false;
        }
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.registerAttempt = true;
        if (this.registerForm.valid) {
            this.loading = true;
            this.userSrv.register(this.registerForm.value)
                .subscribe(function (res) {
                if (res.data.user.is_customer === true) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('customer', JSON.stringify(res.data.user));
                    _this.customer = res.data.user;
                    _this.loggedIn = true;
                    _this.notifyLogin.emit(_this.loggedIn);
                    _this.router.navigateByUrl('/');
                    _this.loading = false;
                }
                else {
                    _this.not_customer = true;
                }
            }, function (err) {
                console.log(err);
                _this.loading = false;
            });
            this.loading = false;
        }
        ;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LoginComponent.prototype, "notifyLogin", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/User/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/User/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/User/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.ordersUrl = this.globals.ORDERS_URL;
        this.createOrdersUrl = this.globals.CREATEORDER_URL;
        this.authToken = localStorage.getItem('token');
        this.customer = JSON.parse(localStorage.getItem('customer'));
    }
    OrderService.prototype.saveOrder = function (cart) {
        var data = {};
        data['cart'] = cart;
        data['currency'] = localStorage.getItem('currency');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'JWT ' + this.authToken });
        return this.http.post(this.ordersUrl, data, { headers: headers });
    };
    OrderService.prototype.postOrder = function (data) {
        // console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'JWT ' + this.authToken });
        return this.http.post(this.createOrdersUrl, data, { headers: headers });
    };
    OrderService.prototype.getOrders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'JWT ' + this.authToken });
        return this.http.get(this.ordersUrl, { headers: headers });
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__shared_api__["a" /* Globals */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/components/User/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.loginUrl = this.globals.LOGIN_URL;
        this.logoutUrl = this.globals.LOGOUT_URL;
        this.registerUrl = this.globals.REGISTER_URL;
        this.loggedIn = false;
        this.authToken = localStorage.getItem('token');
    }
    UserService.prototype.login = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var email = data['email'];
        var password = data['password'];
        return this.http.post(this.loginUrl, JSON.stringify({ email: email, password: password }), { headers: headers });
    };
    UserService.prototype.register = function (data) {
        var formData = new FormData();
        formData.append('first_name', data['first_name']);
        formData.append('last_name', data['last_name']);
        formData.append('email', data['email']);
        formData.append('password', data['password']);
        formData.append('mobile', data['mobile']);
        formData.append('is_customer', 'true');
        return this.http.post(this.registerUrl, formData);
    };
    UserService.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'JWT ' + this.authToken });
        return this.http.post(this.logoutUrl, {}, { headers: headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__shared_api__["a" /* Globals */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/components/User/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart] =\"cart\"></app-header>\r\n<p>\r\n  sign-up works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/User/sign-up/sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/User/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/components/User/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/components/User/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/User/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart]=\"cart\"></app-header>\r\n<section class=\"jumbotron\">\r\n\t<div class=\"inner-content text-center\">\r\n\t\t<h4 class=\"boldest\">My Account</h4>\r\n\t</div>\r\n</section>\r\n<section class=\"padded\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t<div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\r\n\t\t\t\t\t<a class=\"nav-link active\" id=\"v-pills-information-tab\" data-toggle=\"pill\" href=\"#v-pills-information\" role=\"tab\" aria-controls=\"v-pills-information\"\r\n\t\t\t\t\t aria-selected=\"true\">Personal Information</a>\r\n\r\n\t\t\t\t\t<a class=\"nav-link\" id=\"v-pills-orders-tab\" data-toggle=\"pill\" href=\"#v-pills-orders\" role=\"tab\" aria-controls=\"v-pills-orders\"\r\n\t\t\t\t\t aria-selected=\"false\">Orders</a>\r\n\r\n\t\t\t\t\t<a class=\"nav-link\" id=\"v-pills-wishlist-tab\" data-toggle=\"pill\" href=\"#v-pills-wishlist\" role=\"tab\" aria-controls=\"v-pills-wishlist\"\r\n\t\t\t\t\t aria-selected=\"false\">Wishlist</a>\r\n\r\n\t\t\t\t\t<a class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\"\r\n\t\t\t\t\t aria-selected=\"false\" (click)=\"logout()\">Log out</a>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-sm-8 offset-md-1\">\r\n\t\t\t\t<div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n\r\n\t\t\t\t\t<div class=\"tab-pane fade show active\" id=\"v-pills-information\" role=\"tabpanel\" aria-labelledby=\"v-pills-information-tab\">\r\n\r\n\t\t\t\t\t\t<div class=\"profile-container\">\r\n\t\t\t\t\t\t\t<h3 style=\"display: inline-block\">My Information</h3>\r\n\t\t\t\t\t\t\t<a routerLink=\"/\" style=\"float: right; position: relative; top: 5px;\">edit profile</a>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<h5>Account Information</h5>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tName:\r\n\t\t\t\t\t\t\t\t<span>{{customer?.first_name}} {{customer?.last_name}}</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tEmail:\r\n\t\t\t\t\t\t\t\t<span>{{customer?.email}}</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tMobile:\r\n\t\t\t\t\t\t\t\t<span>{{customer?.mobile}}</span>\r\n\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t\t<hr>\r\n\r\n\t\t\t\t\t\t\t<h5>Shipping Information</h5>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tName:\r\n\t\t\t\t\t\t\t\t<span>Jane Doe</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tEmail:\r\n\t\t\t\t\t\t\t\t<span>jane@doe.com</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tAddress 1:\r\n\t\t\t\t\t\t\t\t<span>T4 Marimpex Estate</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tAddress 2:\r\n\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCountry:\r\n\t\t\t\t\t\t\t\t<span>United Kingdom</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tRegion:\r\n\t\t\t\t\t\t\t\t<span>Accrington</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tZip Code:\r\n\t\t\t\t\t\t\t\t<span>12338</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"v-pills-orders\" role=\"tabpanel\" aria-labelledby=\"v-pills-orders-tab\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\" *ngFor=\"let order of orders\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Order#: {{order?.id}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order?.timestamp | date: 'mediumDate'}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Order Status</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order?.order_status}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small style=\"position: relative; left: 5px;\">{{order?.items.length}} items</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small style=\"color: #EB5757; float: right; margin-top: 5px; cursor: pointer; opacity: .9; position: relative; right: 10px;\">view details</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"order-img\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"v-pills-wishlist\" role=\"tabpanel\" aria-labelledby=\"v-pills-wishlist-tab\">\r\n\t\t\t\t\t\tWishlist\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/User/user-profile/user-profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".nav-pills .nav-link {\n  border-radius: 0.25rem;\n  color: #011c27;\n  -webkit-transition: 0.2s ease-in;\n  transition: 0.2s ease-in; }\n  .nav-pills .nav-link:hover {\n    color: #EB5757; }\n  .nav-pills .nav-link.active {\n    background-color: #EB5757;\n    color: #fff; }\n  label {\n  font-size: 13px;\n  font-weight: 700; }\n  input {\n  border: 0; }\n  .jumbotron {\n  margin-bottom: 0 !important; }\n  .padded {\n  background: #E0E0E0;\n  min-height: 500px; }\n  .card .card-header p {\n  font-size: 13px;\n  color: #EB5757;\n  font-weight: bold; }\n  .card .card-header span {\n  font-size: 12px;\n  font-weight: bold;\n  opacity: .7; }\n  .card small {\n  font-weight: bold;\n  opacity: .7; }\n"

/***/ }),

/***/ "./src/app/components/User/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("./src/app/components/User/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/components/User/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(orderSrv, userSrv, router) {
        this.orderSrv = orderSrv;
        this.userSrv = userSrv;
        this.router = router;
        this.orders = [];
        this.customer = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.fetchCustomer();
        this.fetchOrders();
    };
    UserProfileComponent.prototype.fetchOrders = function () {
        var _this = this;
        this.orderSrv.getOrders().subscribe(function (res) {
            _this.orders = res.data;
            console.log(_this.orders);
        }, function (err) {
            console.log(err);
        });
    };
    UserProfileComponent.prototype.fetchCustomer = function () {
        this.customer = JSON.parse(localStorage.getItem('customer'));
        // console.log(this.customer);
    };
    UserProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userSrv.logout().subscribe(function (res) {
            localStorage.clear();
            _this.router.navigate(['/login']);
        }, function (err) {
            localStorage.clear();
            _this.router.navigate(['/login']);
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/components/User/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/User/user-profile/user-profile.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/User/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_routing__ = __webpack_require__("./src/app/components/User/user.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forget_password_forget_password_component__ = __webpack_require__("./src/app/components/User/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/components/User/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up_component__ = __webpack_require__("./src/app/components/User/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__ = __webpack_require__("./src/app/components/User/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_order_service__ = __webpack_require__("./src/app/components/User/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("./src/app/components/User/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// routes

// module

// component




// service


var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__user_routing__["a" /* userRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__["a" /* UserProfileComponent */]
                //  HeaderComponent
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/components/User/user.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("./src/app/components/User/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_component__ = __webpack_require__("./src/app/components/User/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password_forget_password_component__ = __webpack_require__("./src/app/components/User/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__ = __webpack_require__("./src/app/components/User/sign-up/sign-up.component.ts");




var userRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'me', component: __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'forget-password', component: __WEBPACK_IMPORTED_MODULE_2__forget_password_forget_password_component__["a" /* ForgetPasswordComponent */] }
];


/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map