webpackJsonp(["misc.module"],{

/***/ "./src/app/components/Misc/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n <section class=\"jumbotron\">\r\n \t<div class=\"inner-content\">\r\n \t\t<h3 class=\"text-center boldest\"> WELCOME TO VOGUEAFRIQ.COM!!</h3>\r\n \t</div>\r\n </section>\r\n\r\n<section class=\"padded\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"content\">\r\n\t\t\t<p>\r\nYes! Everything on the website is priced at £5! Having established ourselves as global leaders for Staged budget clothing, we are constantly pushing boundaries to bring trend-led clothing for £5. We stand ahead of our competitors for not only the affordable price we offer but also for the high street trends we provide.\r\nOur stocks sell fast. Daily new arrivals keep our website constantly buzzing with fresh new styles. This gives our customers an enhanced shopping experience where they are able to choose from a variety of products. Since inception, we have grown rapidly introducing menswear and plus-size range in addition to womenswear.\r\n</p>\r\n\r\n<p>\r\nCurrently, we have over one million registered customers, who are testimony to the credibility we have gained in Staged fashion. Our reasonable pricing policy combined with our cutting edge quality clothing has generated valuable recommendations on social media platforms. We take pride in engaging our customers through social media by directing them to our daily bestsellers, celebrity style steals, giveaways and catwalk looks.\r\n\r\n\r\n</p>\r\n\r\n<p>\r\nWe have built excellent relationships with manufacturers worldwide who are able to offer us with high street stock at a reasonable price. In our commitment to deliver the best customer satisfaction, we keep our profit margins low and our quality high.\r\n\r\nSo grab a bargain now at everything5pounds.com and stay fabulous on a budget!\r\n\r\nCompany Information\r\nFiver London Limited is a newly incorporated business and registered in England in 2010. The company registration number is 7384676.\r\n\r\n \r\n \r\n\r\n</p>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/components/Misc/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".content {\n  font-size: 14px;\n  line-height: 2;\n  color: #5a6879;\n  font-weight: 600;\n  margin-bottom: 40px; }\n\nbr {\n  content: \"\";\n  display: block;\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/components/Misc/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/Misc/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/Misc/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/Misc/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header>\r\n</app-header> -->\r\n<section class=\"jumbotron\">\r\n    <div class=\"inner-content\">\r\n        <h3 class=\"text-center boldest\">\r\n            CONTACT DETAILS\r\n        </h3>\r\n    </div>\r\n</section>\r\n<section class=\"bg-white padded\">\r\n    <div class=\"container\">\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <address>\r\n                        <h5>\r\n                            LONDON  Address\r\n                        </h5>\r\n                        VogueAfriq.com \r\n\t\tFiver London Ltd\r\n\t\tUnit 44 Yardley Business Centre\r\n\t\tMiles Gray Road,\r\n\t\tBasildon, SS14 3GN\r\n                        <br>\r\n                            You may also contact us via sales@vogueafriq.com or using the contact form here...\r\n                            <p>\r\n                                <i class=\"ion-android-call\">\r\n                                </i>\r\n                                0208 997 3331\r\n                            </p>\r\n                    </address>\r\n                    <hr>\r\n                        <address>\r\n                            <h5>\r\n                                LAGOS  Address\r\n                            </h5>\r\n                            8b Oladipo Diya Crescent, 2nd Avenue Estate, Lagos, Nigeria.\r\n                            <br>\r\n                                You may also contact us via sales@vogueafriq.com or using the contact form here...\r\n                                <p>\r\n                                    <i class=\"ion-android-call\">\r\n                                    </i>\r\n                                    01 794 3024\r\n                                </p>\r\n                        </address>\r\n                </div>\r\n\r\n\r\n                <div class=\"offset-md-1 col-sm-5\">\r\n\t\t\t\t<form id=\"contact\" method=\"post\" class=\"form\" role=\"form\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-6 col-md-6 form-group\">\r\n\t\t\t\t\t<input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" required autofocus />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-6 col-md-6 form-group\">\r\n\t\t\t\t\t<input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-12 col-md-12 form-group text-right\">\r\n\t\t\t\t\t<button class=\"btn btn-accent pull-right\" type=\"submit\">Submit</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/Misc/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-bottom: 3px;\n  border: 0 !important; }\n\n.card-body {\n  padding: 10px 20px;\n  background: #ffffff;\n  font-size: 13px;\n  line-height: 1.5;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: 0 !important;\n  border-radius: 5px; }\n\n.card-header:hover button {\n    color: #eb5757;\n    text-decoration: none; }\n\n.card-header button {\n    text-transform: none;\n    color: #011936;\n    font-weight: 700;\n    display: block;\n    width: 100%;\n    text-align: left; }\n\n.content {\n  font-size: 14px;\n  line-height: 2;\n  color: #5a6879;\n  font-weight: 600;\n  margin-bottom: 40px; }\n\nbr {\n  content: \"\";\n  display: block;\n  margin-bottom: 25px; }\n\n.accordion {\n  margin-top: 40px; }\n\naddress h5, address i {\n  color: #eb5757;\n  text-transform: uppercase;\n  margin-bottom: 20px; }\n\naddress br {\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/components/Misc/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/Misc/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/Misc/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/Misc/faqs/faqs.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart]=\"cart\">\r\n</app-header>\r\n<section class=\"jumbotron\">\r\n    <div class=\"inner-content text-center\">\r\n        <h3 class=\"boldest\">\r\n            Here are some Frequently Asked Questions about our business!\r\n        </h3>\r\n    </div>\r\n</section>\r\n<section class=\"bg-white\">\r\n    <div class=\"container\">\r\n    \t<div id=\"accordion\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingOne\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseOne\" aria-expanded=\"true\" class=\"btn btn-link\" data-target=\"#collapseOne\" data-toggle=\"collapse\">\r\n                        1. WHY IS IT SO CHEAP?\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingOne\" class=\"collapse show\" data-parent=\"#accordion\" id=\"collapseOne\">\r\n                <div class=\"card-body\">\r\n                    Because we have the vast experience in the fashion business and our contacts from all over the world are working for us around the clock! We believe women's fashion trends are changing so fast that our customers should have the right to fill up their wardrobes without having to pay a fortune!\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingTwo\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseTwo\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseTwo\" data-toggle=\"collapse\">\r\n                        2. SHOULD I WORRY ABOUT THE QUALITY OF THE ITEMS?\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingTwo\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseTwo\">\r\n                <div class=\"card-body\">\r\n                   No, not at all. If you go out and pop in to one of your local fashion stores you will find exactly the same products being sold there at a price that is three times higher than ours. Localization of fashion business is one of the biggest factors of the soaring prices in the industry. We offer you a high quality of fashion range at only £5.00 and you will not find a better price.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingThree\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseThree\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseThree\" data-toggle=\"collapse\">\r\n                       3. CAN I RETURN MY ITEMS IF THEY  DO NOT FIT ME?\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingThree\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseThree\">\r\n                <div class=\"card-body\">\r\n                   Of course you can. We give you the option of returning the items that you do not wish to keep and guarantee 100% refund if that is the case.\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingThree\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseThree\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseThree\" data-toggle=\"collapse\">\r\n                       4. ARE YOU GOING TO GET MORE STOCK?\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingThree\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseThree\">\r\n                <div class=\"card-body\">\r\n                  Everyday. Please sign up for a newsletter so not to miss out on any fantastic product we have got on offer. We add new products everyday but we run out of some items everyday too.\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"\">\r\n        <p>Please send your questions to sales@everything5pounds.com if they are not listed above.</p>\r\n\r\n        <p>Our phone lines are open during working hours Monday - Friday (not including bank holidays).</p>\r\n\r\n        <p>Enjoy the 5 star experience!</p>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/Misc/faqs/faqs.component.scss":
/***/ (function(module, exports) {

module.exports = "#accordion {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n\n.btn-link {\n  text-decoration: none;\n  font-weight: 700;\n  text-transform: capitalize; }\n\n.jumbotron:after {\n  background-image: none; }\n\n.jumbotron h3 {\n  color: #000; }\n\n.card-body {\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/components/Misc/faqs/faqs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsComponent; });
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

var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    FaqsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faqs',
            template: __webpack_require__("./src/app/components/Misc/faqs/faqs.component.html"),
            styles: [__webpack_require__("./src/app/components/Misc/faqs/faqs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/components/Misc/misc-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return miscRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__terms_conditions_terms_conditions_component__ = __webpack_require__("./src/app/components/Misc/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shipping_returns_shipping_returns_component__ = __webpack_require__("./src/app/components/Misc/shipping-returns/shipping-returns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/components/Misc/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faqs_faqs_component__ = __webpack_require__("./src/app/components/Misc/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy_component__ = __webpack_require__("./src/app/components/Misc/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("./src/app/components/Misc/contact/contact.component.ts");






var miscRoutes = [
    { path: 'terms-conditions', component: __WEBPACK_IMPORTED_MODULE_0__terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */] },
    { path: 'shipping-returns', component: __WEBPACK_IMPORTED_MODULE_1__shipping_returns_shipping_returns_component__["a" /* ShippingReturnsComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'faqs', component: __WEBPACK_IMPORTED_MODULE_3__faqs_faqs_component__["a" /* FaqsComponent */] },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
];
// const aboutRoutes = Routes({})
// @NgModule({
//   exports:[],
//   imports: []
// })
// export const MiscRouting = [
//   { path: 'terms-conditions', component: TermsConditionsComponent },
//   { path: 'shipping-returns', component: ShippingReturnsComponent },
//   { path: 'about-us', component: AboutComponent },
//   { path: 'faqs', component: FaqsComponent },
//   { path: 'privacy-policy', component: PrivacyPolicyComponent },
//   { path: 'contact-us', component: ContactComponent },
// ]


/***/ }),

/***/ "./src/app/components/Misc/misc.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscModule", function() { return MiscModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_routing__ = __webpack_require__("./src/app/components/Misc/misc-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("./src/app/components/Misc/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("./src/app/components/Misc/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faqs_faqs_component__ = __webpack_require__("./src/app/components/Misc/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy_component__ = __webpack_require__("./src/app/components/Misc/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terms_conditions_terms_conditions_component__ = __webpack_require__("./src/app/components/Misc/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shipping_returns_shipping_returns_component__ = __webpack_require__("./src/app/components/Misc/shipping-returns/shipping-returns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// component



 // 
// import { ShippingComponent } from '../shipping/shipping.component';



var MiscModule = /** @class */ (function () {
    function MiscModule() {
    }
    MiscModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__misc_routing__["a" /* miscRoutes */]),
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_6__faqs_faqs_component__["a" /* FaqsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shipping_returns_shipping_returns_component__["a" /* ShippingReturnsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */],
            ]
        })
    ], MiscModule);
    return MiscModule;
}());



/***/ }),

/***/ "./src/app/components/Misc/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header ></app-header>\r\n<section class=\"jumbotron\">\r\n    <div class=\"inner-content text-center\">\r\n        <h3 class=\"boldest\">\r\n           PRIVACY POLICY\r\n        </h3>\r\n    </div>\r\n\r\n</section>\r\n\r\n<section class=\"bg-white padded\">\r\n    <div class=\"container\">\r\n    <div class=\"content\">\r\n    \t<p>Fiver London Ltd (\"we\") are committed to protecting and respecting your privacy.\r\n</p>\r\n<p>\r\n\tThis privacy policy together with our User Terms and Conditions, (the \"Terms\") and any other documents referred to in the terms sets out the basis on which any personal data we collect from you (the \"user\" or \"customer\"), or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.everything5pounds.com (referred to as \"our website\") you are accepting and consenting to the practices described in this policy.\r\n</p>\r\n\r\n<p>For the purpose of the Data Protection Act 1998 (the \"Act\"), the data controller is Fiver London Ltd, a company incorporated and registered in England with company number 09229268, whose registered address is 12 Castlehaven Road, London NW1 8QW.</p>\r\n    </div>\r\n\r\n\r\n    </div>\r\n\t\r\n</section>"

/***/ }),

/***/ "./src/app/components/Misc/privacy-policy/privacy-policy.component.scss":
/***/ (function(module, exports) {

module.exports = ".content {\n  font-size: 14px;\n  line-height: 2;\n  color: #5a6879;\n  font-weight: 600;\n  margin-bottom: 40px; }\n\nbr {\n  content: \"\";\n  display: block;\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/components/Misc/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
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

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("./src/app/components/Misc/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("./src/app/components/Misc/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/components/Misc/shipping-returns/shipping-returns.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart]=\"cart\">\r\n</app-header>\r\n<section class=\"jumbotron\">\r\n    <div class=\"inner-content text-center\">\r\n        <h3 class=\"boldest\">\r\n           Shipping and Returns\r\n        </h3>\r\n    </div>\r\n</section>\r\n<section class=\"bg-white padded\">\r\n    <div class=\"container\">\r\n    \t<div id=\"accordion\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingOne\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseOne\" aria-expanded=\"true\" class=\"btn btn-link\" data-target=\"#collapseOne\" data-toggle=\"collapse\">\r\n                        WHO DO WE DELIVER TO?\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingOne\" class=\"collapse show\" data-parent=\"#accordion\" id=\"collapseOne\">\r\n                <div class=\"card-body\">\r\n                    We currently ship in the UK and worldwide. All customers must be able to provide a valid shipping address and resident to where the parcel is to be sent to. A full breakdown of the shipping details, which include the full total amount, will be given to you at the checkout before the order is confirmed. Customers hold the right to leave the order stage at this time before the order goes through. At present our delivery charges are determined on the weight of the entire parcel (not per item) and start from just £3.95.\r\n                    <br>\r\n\r\nPlease be advised that under no circumstance would an international/UK customer have to pay an additional fee for postage upon collection of a parcel from the courier. All international parcels are subject to review by the customs agency of the destination country and the addressee is liable for any additional customs charges which may be incurred. <br>\r\n\r\nFor the countries that we deliver to outside of the EU, due to our current courier shipment agreement for all countries outside of the EU including Africa, Asia, South America, Caribbean and Australia there is a 1.5kg limit per package which unfortunately under no circumstance can be waived. <br>\r\n\r\nAll of the delivery charges for international and domestic parcels are calculated on the weight of the parcel you will be informed of the full total amount of your order before you make your payment. Customers still hold the right to leave the order stage at any time before payment is made and your order will not go through. <br>\r\n\r\nIt is the customer’s responsibility to ensure that all of the order details are correct which include the correct sizes, colours and styles selected in the order are correct. This information cannot be amended or changed once confirmed. It is also the customer’s responsibility to ensure that the complete shipping address is correct which include the complete door number, street name and postcode. We do not hold liability for parcel delivered to addresses incorrectly stated on the order. A collection from the wrong address stated on the order has to be arranged by the customer as we are no longer in possession of the parcel. We would have only followed the instruction initially requested on the parcel. <br>\r\n\r\nWe suggest that you write a safe place option or a specific delivery request as a signature may not always be required for delivery of the parcel. If there is no one available to take delivery our carriers may attempt to leave it with a neighbour or in a safe, secure location. A card may be left to advise this to you, or to confirm that the parcel has been returned to the local depot. You can then contact them to arrange collection or to schedule a new delivery date providing that the service is applicable. <br>\r\n\r\nDependent of your method of payment, you can have your parcel shipped to an alternative address. You must ensure that the full address details are included, such as the company organisation or name. You can use any available address line to provide additional details such as company name or other specific address information. If a major credit or debit card is used on our website, the billing address must always be the same address to where the card is registered to otherwise this may prevent an order from going through successfully. An alternative shipping address worldwide can be selected with this method of payment alongside 3D security obtained by the bank. When using PayPal the billing address must be registered, verified and confirmed by PayPal on the account and the shipping address must be in the same country of billing registration.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingTwo\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseTwo\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseTwo\" data-toggle=\"collapse\">\r\n                        DELIVERY TIMES\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingTwo\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseTwo\">\r\n                <div class=\"card-body\">\r\n                    We are unable to give an exact date or time for the delivery as the parcel will delivered within the approximate 1-3 days (unless stated otherwise) that we advise from the dispatch date. No orders are delivered on UK bank holidays. All delivery dates should be estimated from the date the order is despatched which is usually approximately 1-3 days from this date. You must allow at least 48 hours for pick and pack before dispatch.  All dates for delivery which include other courier services i.e. DHL, DPD, PARCELFORCE should be calculated from the date of dispatch and not from the date of order. Certain couriers provide hour time slots on the morning of dispatch to inform customers of the time for delivery. Out of our current couriers on all orders it is only Royal Mail who conducts Saturday deliveries between 9am-3pm. All other orders are delivered between Monday and Friday between 9am- 5pm (7pm for certain couriers).\r\n                    <br>\r\n\r\nPlease also be advised that Royal Mail Next Day Delivery service is available but only for all UK parcels less than 10kg and placed on a working day before 5pm. Orders made after this time will be despatched on the next available working day and delivered on the second working day. When you get to the checkout of your order, you will be given your order delivery information including the service used, prices and courier. If there is no special delivery option given at the checkout this means that your parcel is not eligible for this service. Please also note that the delivery date stated at the checkout for guaranteed next day delivery parcels may not always be updated on time if there is an upcoming bank holiday.  For confirmation of these dates kindly refer to the following link; https://www.gov.uk/bank-holidays\r\n<br>\r\n\r\nInternational orders not sent via DHL, DPD or Parcel Force require 5-7 working days for orders to be delivered to the customs agency of the delivery country. Customs clearance time may vary and is determined by the customs agency of the delivery country. We are unable to guarantee delivery times with parcels sent via the standard international postal service due to the variance of international postal network delivery times. All international parcels are subject to review by the customs agency of the destination country and the addressee is liable for any additional customs charges which may be incurred.<br>\r\n\r\nAdditional information sent from the couriers such as text messages and emails are not a guarantee of the exact delivery times. This can sometimes be sent in error and is not an exact representation of the timescale. Always confirm with the sender (Everything5pounds.com) for the exact dispatch information for precise and more accurate information. We are not liable for delays calculated based on provided delivery estimates of the courier company in charge or other third parties.<br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingThree\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseThree\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseThree\" data-toggle=\"collapse\">\r\n                       RETURNS\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingThree\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseThree\">\r\n                <div class=\"card-body\">\r\n                   Items may be returned for a full refund or exchange within 14 days from the date an order was received. There is a maximum of 30 days from the date the parcel was received for customers to identify any faulty items and contact us.<br>\r\n\r\nCHRISTMAS RETURNS POLICY<br>\r\n\r\nOur returns policy over Christmas 2017 for a full refund or exchange on orders placed on or after 1st December 2017 still in their original packaging, with tags/labels and unworn will have up to 15th January 2018 to return items. All items whether they do not suit your requirements or are damaged must be identified within this time.<br>\r\n\r\nCustomers are required to send items back to us at their own cost via any courier if they do not suit their requirements and this will also include items that do not fit, not suitable, wrong item selected, incorrect sizing, not same as on the website.<br>\r\n\r\nUnfortunately we do not accept returns, on any underwear or swimwear items at any time due to hygiene reasons. Such items cannot be returned unless faulty or an incorrect size or style is sent. We kindly ask that you thoroughly check the size labels, product codes and also check for any faults before trying on. We will not accept any items back if the hygiene sticker has been removed from the garments and if they are not in their original packaging with labels intact. No refunds will be processed for any swimwear/underwear unless both pieces are returned. All goods will be inspected upon on return.<br>\r\n\r\nParcels must be sent back via post only- we do not accept returns in person to our distribution centre. All parcels returned in person not via the postal service can be rejected/returned to sender/not processed. We do not have any retail stores/outlets to purchase or return items to. All items returned must be in their original packaging (shoe boxes/clear plastic) and have labels/tags intact -except for items where packaging or labels were not provided by Everything5pounds.com.<br>\r\n\r\nIf an exchange is requested we will send the exchange item free of charge. All items returned for exchange will be processed accordingly by our returns team. If the exchange item requested is no longer available at the time of processing and no alternatives are provided, an automated refund will be applied.\r\n\r\nRefunds made for returned/damaged/missing items can include the part of the original postage and packaging. If you return every item from your order within the set time you will be refunded your full P&amp;P placed from the original order. If only some of the items are returned, then part of your P&amp;P will be refunded. If an exchange item is returned for a refund you will not be refunded any of your original postage but just the £5 for the item- refunds can be rejected at this time and we have the right to issue an exchange only for exchanges.<br>\r\n\r\nWe strongly advise that customers inspect their order upon receipt of the parcel for any manufacturers defects that could have possible been missed throughout the checking process. We have a dedicated control team, however, in some circumstances these errors can sometimes be missed, so it is highly advisable to apply checks before using a purchased item.<br>\r\n\r\nPre-paid return labels are sent by post to UK customers only if they receive a wrong, damaged or manufacturer’s faulty item. Alternative procedures apply to customers outside of the UK. Customers are required to send items back to us at their own cost via any courier if they do not suit their requirements and this will also include items that do not fit, not suitable, wrong item selected, incorrect sizing, not same as on the website.<br>\r\n\r\nCustomers must keep safe a valid postage receipt including parcel weight for all return parcel enquiries. A valid postage receipt including tracking number must be provided in case of any parcels lost in transit. Any non-delivery cases will not be valid without this receipt which includes with us Royal Mail or any other courier service used. It is the responsibility of the sender to open a claim for any parcel’s lost in transit with the courier.<br>\r\n\r\nYou may use the original packaging if you still have them. If not, please pack your items securely in any packaging material suitable. Parcel can be rejected if parcels are returned damaged due to unsecure packaging.<br>\r\n\r\nFull valid details along with refund/exchange instructions must be included within each returning package in order to be processed correctly. For example you must include a cover note stating your full name on your account, order number returned, the items from the given order that are being returned and your address for any exchanges to be sent. Alternatively, you can make a copy of your packing slip and highlight which items from this order you are returning and your request for a refund or exchange. Parcels can be held or rejected by the returns department and not processed if the received parcel cannot be identified by the details provided within the package. All returning requests for a refund/exchange will be processed upon the receipt of your returning parcel/packet from which our processing times of returning parcels are between 3- 5 working days.<br>\r\n\r\nEverything5pounds follow specific guidelines from our manufacturers about our shoe sizes. These sizes may not comprehend with the mainstream store shoe sizes, however you would need to take note of these particular sizes that everything5pounds.com comply with. Our general shoe sizes range from a size 2 and 2 ½ to size 8 (41) for women and up to size 12 (45) for men. These sizes are advised to be the EU equivalent to a size 35 (size 2) – 41 (size 8). Kindly read through our customer reviews and also product description to get a better understanding to the shoes fit. You are welcome to email us at sales@everything5pounds.com and request for a size guide to be sent to you. Please also be advised that we do not cover the postage to returns items that do not fit or do not suit your requirements. Kindly bear in mind our product sizes when placing orders.<br>\r\n\r\nAll items sent back to us via post must be within the 14 days policy and can be sent to:\r\n\r\nFiver London Limited\r\nUnit 44 Yardley Business Centre\r\nMiles Gray Road\r\nBasildon\r\nSS14 3GN\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingThree\">\r\n                <h5 class=\"mb-0\">\r\n                    <button aria-controls=\"collapseThree\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseThree\" data-toggle=\"collapse\">\r\n                       UNDELIVERED PARCELS RETURNED\r\n                    </button>\r\n                </h5>\r\n            </div>\r\n            <div aria-labelledby=\"headingThree\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseThree\">\r\n                <div class=\"card-body\">\r\n                    Providing that the recipient’s order has been registered as delivered by the courier company and providing that the customer has provided the correct delivery address, if an order is not received by the customer within the first seven days from the delivery date stated by the couriers, we can raise an investigation in our aim to recover the parcel. Please be advised it is a compulsory condition to report non-delivery cases within 10 calendar days from the delivery date stated by the courier company to initiate a claim with the courier company. Under no circumstance can we declare a parcel as lost until a full investigation with the warehouse/courier company/returns department has taken place\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/Misc/shipping-returns/shipping-returns.component.scss":
/***/ (function(module, exports) {

module.exports = "#accordion {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n\n.btn-link {\n  text-decoration: none;\n  font-weight: 700;\n  text-transform: capitalize; }\n\n.jumbotron:after {\n  background-image: none; }\n\n.jumbotron h3 {\n  color: #000; }\n\n.card-body {\n  font-size: 14px; }\n\n.card {\n  margin-bottom: 3px;\n  border: 0 !important; }\n\n.card-body {\n  padding: 10px 20px;\n  background: #ffffff;\n  font-size: 13px;\n  line-height: 1.5;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: 0 !important;\n  border-radius: 5px; }\n\n.card-header:hover button {\n    color: #eb5757;\n    text-decoration: none; }\n\n.card-header button {\n    text-transform: none;\n    color: #011936;\n    font-weight: 700;\n    display: block;\n    width: 100%;\n    text-align: left; }\n\n.content {\n  font-size: 14px;\n  line-height: 2;\n  color: #5a6879;\n  font-weight: 600;\n  margin-bottom: 40px; }\n\nbr {\n  content: \"\";\n  display: block;\n  margin-bottom: 25px; }\n\n.accordion {\n  margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/components/Misc/shipping-returns/shipping-returns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingReturnsComponent; });
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

var ShippingReturnsComponent = /** @class */ (function () {
    function ShippingReturnsComponent() {
    }
    ShippingReturnsComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    ShippingReturnsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shipping-returns',
            template: __webpack_require__("./src/app/components/Misc/shipping-returns/shipping-returns.component.html"),
            styles: [__webpack_require__("./src/app/components/Misc/shipping-returns/shipping-returns.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShippingReturnsComponent);
    return ShippingReturnsComponent;
}());



/***/ }),

/***/ "./src/app/components/Misc/terms-conditions/terms-conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header ></app-header>\r\n<section class=\"jumbotron\">\r\n    <div class=\"inner-content text-center\">\r\n        <h3 class=\"boldest\">\r\n           TERMS &amp; CONDITIONS\r\n        </h3>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"bg-white padded\">\r\n    <div class=\"container\">\r\n    \t<div class=\"content\">\r\n    \t\tThese Sale Terms and Conditions (together with our Privacy Policy and Website Acceptable Use Policy) form the contract between Fiver London Ltd (\"we/us\") and you (the \"user\" or \"you\") and sets out the legal terms and conditions (the \"Terms\") on which we sell any of the products (the \"Products\") listed on our Website (as defined below) to you.<br/>\r\n\r\n\t\t\tThese Terms will govern your use of the Website. Please read these Terms carefully and make sure that you understand them, before ordering any Products from the Website. Please note that before placing an order you will be asked to agree to these Terms. If you refuse to accept these Terms, you will not be able to order any Products from the Website.<br/>\r\n\r\n\t\t\tWe may amend these Terms from time to time as set out in clause 6. Every time you wish to order Products, please check the Website for the latest Terms to ensure you understand the terms which will apply at that time.<br/>\r\n    \t</div>\r\n\r\n\t\t<div id=\"accordion\">\r\n\t\t\t<div class=\"card\">\r\n\t            <div class=\"card-header\" id=\"headingOne\">\r\n\t                <h5 class=\"mb-0\">\r\n\t                    <button aria-controls=\"collapseThree\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseThree\" data-toggle=\"collapse\">\r\n\t                      1. INFORMATION ABOUT US\r\n\t                    </button>\r\n\t                </h5>\r\n\t            </div>\r\n\t            <div aria-labelledby=\"headingOne\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseThree\">\r\n\t                <div class=\"card-body\">\r\n\t                     <ol>\r\n\t                     \t<li>\r\n\t\t\t\t\t\t\t\tWe operate the online Website available at our website www.vogueafriq.com (as amended by us from time to time) (the \"Website\"). We are Fiver London Limited, a company incorporated and registered in England with company number 07384676, whose registered address is 54-56 Camden Lock Place, London NW1 8AF.\r\n\t                     \t</li>\r\n\r\n\t                     \t<li>\r\n\t\t\t\t\t\t\t\tIf you wish to contact our customer service team, please refer to the methods and details on the Contact Us page of the Website.\r\n\t                     \t</li>\r\n\t                     </ol>\r\n\t                </div>\r\n\t            </div>\r\n        \t</div>\r\n        \t<div class=\"card\">\r\n\t            <div class=\"card-header\" id=\"headingTwo\">\r\n\t                <h5 class=\"mb-0\">\r\n\t                    <button aria-controls=\"collapseThree\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseThree\" data-toggle=\"collapse\">\r\n\t                       2. OUR PRODUCTS\r\n\t                    </button>\r\n\t                </h5>\r\n\t            </div>\r\n\t            <div aria-labelledby=\"headingTwo\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseThree\">\r\n\t                <div class=\"card-body\">\r\n\t                    Some of our Products can come with various manufacturers' labels where they have been purchased from branded mainstream stores. It is a legal requirement for all branded store labels to be removed from the Product in order for them to be sold on our Website. We try to ensure that this is conducted as neatly and precise as possible. However, some of the Products are imported on garment hangers and do not have protective packaging, so these will be dispatched as a lose packaged item. We offer our customers the right to exchange or refund their purchases from our website and this is set out in more below.\r\n\r\n\t\t\t\t\t\t2.2\r\n\t\t\t\t\t\tWARNING: Choking hazard- Some of our products contain small parts and detachable pieces which are not suitable for children under 3 years. Some Products are also dispatched in plastic packaging and should not be left with children unsupervised.<br/>\r\n\r\n\t\t\t\t\t\t2.3\r\n\t\t\t\t\t\tWhilst we try to make sure that the display and description of the Products on the Website is materially accurate, please note that we cannot guarantee that your computer's display of the colours accurately reflect the actual colour of the Products. The images of the Products on the Website are for illustrative purposes only and any Products you order may vary slightly from those images.<br/>\r\n\r\n\t\t\t\t\t\t2.4\r\n\t\t\t\t\t\tWe follow specific guidelines from our manufacturers about our shoe sizes. These sizes may not match the mainstream stores' shoe sizes, however, please take note of our particular sizes. Our general shoe sizes range from a size 2 and 2 up to size 8. These sizes are advised to be the EU equivalent to a size 35 (size 2) - 41 (size 8). Kindly read through our customer reviews and also product description to get a better understanding of the shoes' fit. You are welcome to email us at sales@everything5pounds.com and request for a size guide to be sent to you.<br/>\r\n\r\n\r\n\t                </div>\r\n\t            </div>\r\n        \t</div>\r\n        \t<div class=\"card\">\r\n\t            <div class=\"card-header\" id=\"headingThree\">\r\n\t                <h5 class=\"mb-0\">\r\n\t                    <button aria-controls=\"collapseThree\" aria-expanded=\"false\" class=\"btn btn-link collapsed\" data-target=\"#collapseThree\" data-toggle=\"collapse\">\r\n\t                      3. HOW WE USE YOUR PERSONAL INFORMATION\r\n\t                    </button>\r\n\t                </h5>\r\n\t            </div>\r\n\t            <div aria-labelledby=\"headingThree\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapseThree\">\r\n\t                <div class=\"card-body\">\r\n\t                   We only use your personal information in accordance with our Privacy Policy. Please take the time to read our Privacy Policy as it includes important terms which apply to you.\r\n\t                </div>\r\n\t            </div>\r\n        \t</div>\r\n\t\t</div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/Misc/terms-conditions/terms-conditions.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-bottom: 3px;\n  border: 0 !important; }\n\n.card-body {\n  padding: 10px 20px;\n  background: #ffffff;\n  font-size: 13px;\n  line-height: 1.5;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: 0 !important;\n  border-radius: 5px; }\n\n.card-header:hover button {\n    color: #eb5757;\n    text-decoration: none; }\n\n.card-header button {\n    text-transform: none;\n    color: #011936;\n    font-weight: 700;\n    display: block;\n    width: 100%;\n    text-align: left; }\n\n.content {\n  font-size: 14px;\n  line-height: 2;\n  color: #5a6879;\n  font-weight: 600;\n  margin-bottom: 40px; }\n\nbr {\n  content: \"\";\n  display: block;\n  margin-bottom: 25px; }\n\n.accordion {\n  margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/components/Misc/terms-conditions/terms-conditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsComponent; });
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

var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    TermsConditionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__("./src/app/components/Misc/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__("./src/app/components/Misc/terms-conditions/terms-conditions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ })

});
//# sourceMappingURL=misc.module.chunk.js.map