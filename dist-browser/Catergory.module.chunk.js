webpackJsonp(["Catergory.module"],{

/***/ "./src/app/components/Catergory/Catergory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatergorysModule", function() { return CatergorysModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Catergory_routing__ = __webpack_require__("./src/app/components/Catergory/Catergory.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_product_service__ = __webpack_require__("./src/app/components/Catergory/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_types_service__ = __webpack_require__("./src/app/components/Catergory/services/product-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_category_service__ = __webpack_require__("./src/app/components/Catergory/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clearance_sales_clearance_sales_component__ = __webpack_require__("./src/app/components/Catergory/clearance-sales/clearance-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_arrivals_new_arrivals_component__ = __webpack_require__("./src/app/components/Catergory/new-arrivals/new-arrivals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__category_detail_category_detail_component__ = __webpack_require__("./src/app/components/Catergory/category-detail/category-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// module


// services



// components



var CatergorysModule = /** @class */ (function () {
    function CatergorysModule() {
    }
    CatergorysModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__Catergory_routing__["a" /* CatergoryRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                //  HeaderComponent
                __WEBPACK_IMPORTED_MODULE_9__clearance_sales_clearance_sales_component__["a" /* ClearanceSalesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__new_arrivals_new_arrivals_component__["a" /* NewArrivalsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__category_detail_category_detail_component__["a" /* CategoryDetailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_7__services_product_types_service__["a" /* ProductTypesService */],
                __WEBPACK_IMPORTED_MODULE_8__services_category_service__["a" /* CategoryService */]
            ]
        })
    ], CatergorysModule);
    return CatergorysModule;
}());



/***/ }),

/***/ "./src/app/components/Catergory/Catergory.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatergoryRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clearance_sales_clearance_sales_component__ = __webpack_require__("./src/app/components/Catergory/clearance-sales/clearance-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_arrivals_new_arrivals_component__ = __webpack_require__("./src/app/components/Catergory/new-arrivals/new-arrivals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_detail_category_detail_component__ = __webpack_require__("./src/app/components/Catergory/category-detail/category-detail.component.ts");



var CatergoryRoutes = [
    { path: 'clearance/:category/:productType/:sub', component: __WEBPACK_IMPORTED_MODULE_0__clearance_sales_clearance_sales_component__["a" /* ClearanceSalesComponent */] },
    { path: 'new-arrivals/:category/:productType/:sub', component: __WEBPACK_IMPORTED_MODULE_1__new_arrivals_new_arrivals_component__["a" /* NewArrivalsComponent */] },
    { path: 'category/:category/:productType/:sub', component: __WEBPACK_IMPORTED_MODULE_2__category_detail_category_detail_component__["a" /* CategoryDetailComponent */] },
];


/***/ }),

/***/ "./src/app/components/Catergory/category-detail/category-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart]=\"cart\"></app-header>\r\n<section class=\"padded\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <!-- filter section -->\r\n\r\n        <div id=\"accordion\" role=\"tablist\">\r\n          <!-- start filter box -->\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" role=\"tab\" id=\"FilterTab\">\r\n              <h5 class=\"mb-0\">\r\n                <a class=\"boldest\" data-toggle=\"collapse\" href=\"#FilterTabPanel\" aria-expanded=\"true\" aria-controls=\"FilterTabPanel\">\r\n                  Filter\r\n                </a>\r\n                <span class=\"icon float-right\">\r\n                  <i class=\"ion-plus-round\"></i>\r\n                </span>\r\n                <button class=\"btn btn-secondary btn-block filter-btn\" (click)=\"applyFilter()\">Apply</button>\r\n              </h5>\r\n            </div>\r\n\r\n            <div id=\"FilterTabPanel\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\" style=\"padding-right: 15px;\">\r\n                <ul class=\"nav flex-column\">\r\n                  <!-- update filter button -->\r\n                  <div style=\"margin-bottom: 10px\">\r\n                    <label>Price Range</label>\r\n                    <input type=\"text\" class=\"range-slider\" value=\"\" />\r\n\r\n                  </div>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\r\n              <h5 class=\"mb-0\">\r\n                <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n                  Product Type\r\n                </a>\r\n                <span class=\"icon float-right\">\r\n                  <i class=\"ion-plus-round\"></i>\r\n                </span>\r\n              </h5>\r\n            </div>\r\n            <div id=\"collapseTwo\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\">\r\n                <ul class=\"nav flex-column\">\r\n                  <li class=\"nav-item\">\r\n                    <div *ngFor=\"let productType of productTypes\">\r\n                      <label for=\"{{productType.slug}}\">\r\n                        <input type=\"checkbox\" id=\"{{productType.slug}}\" value=\"{{productType.slug}}\" (change)=\"addProductTypeFilter($event)\"> &nbsp; {{productType.name}}\r\n                      </label>\r\n                    </div>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-7 offset-md-1\">\r\n        <h5 class=\"boldest\">\r\n          {{category}} > {{productType}} > {{sub}}\r\n        </h5>\r\n        <p style=\"font-size: 12px\">\r\n          <b>{{products?.length || '0'}}</b> Item(s) found</p>\r\n        <div class=\"row\">\r\n\r\n          <!-- <div class=\"col-md-6 col-lg-4\" *ngFor=\"let product of products\">\r\n            <div class=\"product-component text-center\">\r\n              <div class=\"product-image\">\r\n                <a routerLink=\"/product/{{product.id}}/{{product.slug}}\">\r\n                  <img src=\"{{product.banner_image}}\" alt=\"product image\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"product-title\">\r\n                <h6 class=\"\" style=\"text-align: center;margin: 0;padding: 10px 0 0;\">\r\n                  <a style=\"color: #011936\" routerLink=\"/product/{{product.id}}/{{product.slug}}\">{{product.name}}</a>\r\n                </h6>\r\n                <span class=\"text-center\">\r\n                  <span>{{t.getItem('currency')}}</span>\r\n                  <b>{{product.sale_price / t.getItem('rate') |number}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <ul class=\"listing\">\r\n            <li class=\"product\" *ngFor=\"let product of products\">\r\n              <a class=\"img-wrapper\" routerLink=\"/product/{{product.id}}/{{product.slug}}\">\r\n                <img src=\"{{product.banner_image}}\" alt=\"{{product.slug}}\" />\r\n              </a>\r\n              <div class=\"info\">\r\n                <div class=\"title\">{{product.name}}</div>\r\n                <div class=\"price\">{{t.getItem('currency')}}{{product.sale_price / t.getItem('rate') | number}}</div>\r\n              </div>\r\n\r\n              <div class=\"actions-wrapper\">\r\n                <a href=\"#\" class=\"add-btn wishlist\">Wishlist</a>\r\n                <a href=\"#\" class=\"add-btn cart\">Cart</a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/Catergory/category-detail/category-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 0;\n  color: #fff; }\n  .jumbotron .inner-content {\n    z-index: 999;\n    position: relative; }\n  .jumbotron::after {\n    content: '';\n    z-index: 998;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.3;\n    background-image: linear-gradient(24deg, #530620, #1b1918); }\n  #products .product-item {\n  margin-bottom: 20px; }\n  #products .product-item img {\n    width: 100%;\n    border-radius: 3px; }\n  #products .product-details {\n  text-align: center;\n  margin-top: 20px; }\n  .filter-btn {\n  margin-top: 10px; }\n  .listing {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  /*just for pen positioning*/\n  /*   position: absolute;\r\n  top: 20%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 900px; */ }\n  .product {\n  width: 240px;\n  position: relative;\n  margin: 10px; }\n  .product a {\n  text-decoration: none; }\n  .img-wrapper {\n  display: block;\n  width: 100%;\n  height: 240px;\n  border: 1px solid #afafaf;\n  border-bottom: 0;\n  overflow: hidden;\n  text-align: center; }\n  .img-wrapper img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain; }\n  .info {\n  width: 100%;\n  background: #000;\n  color: #fff;\n  position: relative;\n  padding: 40px 10px 20px 10px;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-box-shadow: 0 0 1px transparent;\n          box-shadow: 0 0 1px transparent;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition-property: color,height;\n  transition-property: color,height;\n  -webkit-transition-duration: 0.3s,0.4s;\n          transition-duration: 0.3s,0.4s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  height: 83px; }\n  .info:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out; }\n  .info:after {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  left: calc(50% - 11px);\n  bottom: 0;\n  border-width: 10px 10px 0 10px;\n  border-color: black transparent transparent transparent; }\n  .product:hover .info {\n  height: 40px; }\n  .product:hover .info:before {\n  -webkit-transform: scaleY(0.7);\n          transform: scaleY(0.7); }\n  .product:hover .info:after {\n  visibility: visible;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px); }\n  .title {\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out; }\n  .title a {\n  color: inherit; }\n  .product:hover .title {\n  -webkit-transform: translateY(-18px);\n          transform: translateY(-18px);\n  font-weight: bold;\n  color: #000; }\n  .price {\n  background: #e32d2c;\n  position: absolute;\n  font-size: 1.3em;\n  padding: 4px 13px;\n  top: -15px;\n  right: 10px; }\n  .price.sale {\n  background: #00ba2f; }\n  .price.old {\n  font-size: 0.95em;\n  padding: 4px 6px;\n  text-decoration: line-through;\n  top: -43px; }\n  .actions-wrapper {\n  margin-top: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  visibility: hidden; }\n  .actions-wrapper * {\n  width: 50%;\n  padding: 2px 0;\n  text-align: center;\n  color: #191919;\n  font-size: 0.95em;\n  font-weight: bold; }\n  .actions-wrapper *:before {\n  font-family: \"FontAwesome\";\n  margin-right: 8px; }\n  .wishlist {\n  border-right: 1px solid #afafaf; }\n  .wishlist:hover {\n  color: #e32d2c; }\n  .wishlist:before {\n  content: \"\\f08a\"; }\n  .cart:hover {\n  color: #0a75b9; }\n  .cart:before {\n  content: \"\\f07a\"; }\n  .product:hover .actions-wrapper * {\n  visibility: visible; }\n  .note {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 4px 8px;\n  font-size: 0.9em; }\n  .note.on-sale {\n  background: #00ba2f;\n  color: #fff; }\n  .note.no-stock {\n  background: #191919;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/components/Catergory/category-detail/category-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/components/Catergory/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_types_service__ = __webpack_require__("./src/app/components/Catergory/services/product-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__("./src/app/components/Catergory/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(productSrv, productTypeSrv, categorySrv, route, globals) {
        this.productSrv = productSrv;
        this.productTypeSrv = productTypeSrv;
        this.categorySrv = categorySrv;
        this.route = route;
        this.globals = globals;
        this.t = localStorage;
        this.host_address = this.globals.HOST_URL;
        this.categoryFilter = [];
        this.productTypeFilter = [];
        this.theFilter = {};
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var t = this.route;
        var productFilter = this.theFilter;
        var a = this;
        this.route.params.switchMap(function (params) {
            return _this.productSrv.fetchProductsByCategory(params['category'], params['productType'], params['sub']);
        })
            .subscribe(function (res) {
            _this.products = res.results;
            _this.productType = t.snapshot.params['productType'];
            _this.category = t.snapshot.params['category'];
            _this.sub = t.snapshot.params['sub'];
            // console.log(this.category, this.productType, this.sub);
            // console.log(this.products);
            a.fetchProductTypes(_this.category);
        });
        this.fetchCategories();
        $(".range-slider").ionRangeSlider({
            'type': 'double',
            onStart: function (data) {
                // console.log("onStart");
            },
            onChange: function (data) {
                // console.log("onChange");
                productFilter['minPrice'] = data['from'];
                productFilter['maxPrice'] = data['to'];
            }
        });
        $('.filter-btn').click(function (e) {
            e.preventDefault();
            var button_text = $(this).text();
            // setTimeout(function(){
            $(this).text('Loading ...');
            // },2000);
        });
    };
    CategoryDetailComponent.prototype.addCategoryFilter = function (e) {
        var categoryFilter = this.categoryFilter;
        if (e.target.checked) {
            categoryFilter.push(e.target.value);
            //remove currency from list
            //this.currencys.remove(e.target.value);
        }
        else {
            var index = categoryFilter.indexOf(e.target.value);
            if (index != -1) {
                categoryFilter.splice(index, 1);
            }
        }
        this.theFilter['categorys'] = categoryFilter;
    };
    CategoryDetailComponent.prototype.addProductTypeFilter = function (event) {
        var productTypeFilter = this.productTypeFilter;
        if (event.target.checked) {
            productTypeFilter.push(event.target.value);
            //remove currency from list
            //this.currencys.remove(e.target.value);
        }
        else {
            var index = productTypeFilter.indexOf(event.target.value);
            if (index != -1) {
                productTypeFilter.splice(index, 1);
            }
        }
        this.theFilter['productTypes'] = productTypeFilter;
    };
    CategoryDetailComponent.prototype.applyFilter = function () {
        // let filters = {};
        // filters['prices'] = this.theFilter;
        // filters['categories'] = this.categoryFilter;
        // filters['productTypes'] = this.productTypeFilter;
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.productSrv.fetchProductsByCategory(params['category'], params['productType'], params['sub'], _this.theFilter);
        })
            .subscribe(function (res) {
            _this.products = res.results;
        }, function (err) {
            console.log(err);
        });
    };
    CategoryDetailComponent.prototype.fetchProductTypes = function (pt) {
        var _this = this;
        this.productTypeSrv.fetchProductTypes(pt).subscribe(function (res) {
            _this.productTypes = res.results;
            // console.log(this.productTypes);
        }, function (err) {
            console.log(err);
        });
    };
    CategoryDetailComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categorySrv.fetchCategories().subscribe(function (res) {
            _this.categorys = res.results;
            // console.log(this.categorys);
        }, function (err) {
            console.log(err);
        });
    };
    CategoryDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category-detail',
            template: __webpack_require__("./src/app/components/Catergory/category-detail/category-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/Catergory/category-detail/category-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__services_product_types_service__["a" /* ProductTypesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */]])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/Catergory/clearance-sales/clearance-sales.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart] =\"cart\"></app-header>\r\n<section class=\"padded\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n       <!-- filter section -->\r\n\r\n        <div id=\"accordion\" role=\"tablist\">\r\n          <!-- start filter box -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" role=\"tab\" id=\"FilterTab\">\r\n                  <h5 class=\"mb-0\">\r\n                    <a class=\"boldest\" data-toggle=\"collapse\" href=\"#FilterTabPanel\" aria-expanded=\"true\" aria-controls=\"FilterTabPanel\">\r\n                     Filter\r\n                    </a>\r\n                    <span class=\"icon float-right\"><i class=\"ion-plus-round\"></i></span>\r\n                     <button class=\"btn btn-secondary btn-block filter-btn\" (click)=\"applyFilter()\">Apply</button>\r\n                  </h5>\r\n                </div>\r\n\r\n                <div id=\"FilterTabPanel\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\" style=\"padding-right: 15px;\">\r\n                  <ul class=\"nav flex-column\">\r\n                    <!-- update filter button -->\r\n                    <div style=\"margin-bottom: 10px\">\r\n                        <label>Price Range</label>\r\n                        <input type=\"text\" class=\"range-slider\" value=\"\" />\r\n                     \r\n                    </div>\r\n                  </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end filter box -->\r\n<!--  <div class=\"card\">\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n      <h5 class=\"mb-0\">\r\n        <a class=\"boldest\" data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n         Categories\r\n        </a>\r\n        <span class=\"icon float-right\"><i class=\"ion-plus-round\"></i></span>\r\n      </h5>\r\n    </div>\r\n\r\n    <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n      <div class=\"card-body\">\r\n      <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\" >\r\n        <div *ngFor=\"let item of categorys\">\r\n          <label for=\"{{item.slug}}\">\r\n            <input type=\"checkbox\" id=\"{{item.slug}}\"   value=\"{{item.slug}}\" (change)=\"addCategoryFilter($event)\"> &nbsp;\r\n                  {{item.name}}\r\n            </label>\r\n        </div>\r\n\r\n\r\n      </li>\r\n\r\n    </ul>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\r\n      <h5 class=\"mb-0\">\r\n        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n          Product Type\r\n        </a>\r\n        <span class=\"icon float-right\"><i class=\"ion-plus-round\"></i></span>\r\n      </h5>\r\n    </div>\r\n    <div id=\"collapseTwo\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n      <div class=\"card-body\">\r\n        <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\" >\r\n        <div *ngFor=\"let productType of productTypes\">\r\n          <label for=\"{{productType.slug}}\">\r\n          <input type=\"checkbox\" id=\"{{productType.slug}}\"  value=\"{{productType.slug}}\" (change)=\"addProductTypeFilter($event)\"> &nbsp;\r\n          {{productType.name}}\r\n        </label>\r\n        </div>\r\n\r\n\r\n\r\n      </li>\r\n\r\n    </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n</div>\r\n      </div>\r\n      <div class=\"col-sm-8 offset-md-1\">\r\n        <h5 class=\"boldest\">\r\n          <!-- You searched for \"{sample search results}\" -->\r\n          {{category}} > {{productType}} > {{sub}}\r\n        </h5>\r\n        <p style=\"font-size: 12px\"><b>{{sales?.length || '0'}}</b> Item(s) found</p>\r\n        <!--  -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\" *ngFor=\"let sale of sales\">\r\n            <!-- overall link for product and title -->\r\n            <a routerLink=\"/product/{{sale.id}}/{{sale.slug}}\">\r\n              <div class=\"product-component text-center\">\r\n            <div class=\"product-image\">\r\n              <img src=\"{{sale.banner_image}}\" alt=\"product image\" class=\"img-fluid\">\r\n            </div>\r\n            <div class=\"product-title\">\r\n              <h6 class=\"\" style=\"text-align: center;margin: 0;padding: 10px 0 0;\">\r\n              <a style=\"color: #011936\" routerLink=\"/product/{{sale.id}}/{{sale.slug}}\">{{sale.name}}</a></h6>\r\n              <span class=\"text-center\">\r\n                <span>{{t.getItem('currency')}}</span><b>{{sale.sale_price * t.getItem('rate')|number}}</b>\r\n              </span>\r\n              </div>\r\n            </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/components/Catergory/clearance-sales/clearance-sales.component.scss":
/***/ (function(module, exports) {

module.exports = ".product-component img {\n  width: 100%; }\n\n.product-component .product-title {\n  margin-top: 10px; }\n\n.card {\n  border: 0;\n  margin-bottom: 15px;\n  margin-bottom: 15px;\n  -webkit-box-shadow: 2px 2px 5px #ddd;\n          box-shadow: 2px 2px 5px #ddd; }\n\n.card-body {\n  padding: 1.25rem 5px; }\n\n.card-body a {\n    font-weight: 100;\n    color: #EB5757; }\n\n.card-header {\n  border: 0;\n  padding: 20px; }\n\n.card-header h5 {\n    font-family: \"Montserrat\", sans-serif;\n    color: #011936;\n    font-size: 15px; }\n\n.card-header h5 a {\n      color: #011936;\n      text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/Catergory/clearance-sales/clearance-sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearanceSalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/components/Catergory/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_types_service__ = __webpack_require__("./src/app/components/Catergory/services/product-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__("./src/app/components/Catergory/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClearanceSalesComponent = /** @class */ (function () {
    function ClearanceSalesComponent(productSrv, productTypeSrv, categorySrv, route, globals) {
        this.productSrv = productSrv;
        this.productTypeSrv = productTypeSrv;
        this.categorySrv = categorySrv;
        this.route = route;
        this.globals = globals;
        //products:any[];
        this.t = localStorage;
        this.host_address = this.globals.HOST_URL;
        this.categoryFilter = [];
        this.productTypeFilter = [];
        this.theFilter = {};
    }
    ClearanceSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.fetchClearance();
        var t = this.route;
        var productFilter = this.theFilter;
        var category = this.category;
        var a = this;
        this.route.params.switchMap(function (params) {
            return _this.productSrv.fetchClearance(params['category'], params['productType'], params['sub']);
        })
            .subscribe(function (data) {
            _this.sales = data;
            _this.category = t.snapshot.params['category'];
            _this.productType = t.snapshot.params['productType'];
            _this.sub = t.snapshot.params['sub'];
            console.log(_this.category, _this.productType, _this.sub);
            console.log(_this.sales);
            a.fetchProductTypes(_this.category);
        });
        this.fetchCategories();
        $(".range-slider").ionRangeSlider({
            'type': 'double',
            onStart: function (data) {
                // console.log("onStart");
            },
            onChange: function (data) {
                // console.log("onChange");
                productFilter['minPrice'] = data['from'];
                productFilter['maxPrice'] = data['to'];
            }
        });
        $('.filter-btn').click(function (e) {
            e.preventDefault();
            var button_text = $(this).text();
            // setTimeout(function(){
            $(this).text('Loading ...');
            // },2000);
        });
    };
    ClearanceSalesComponent.prototype.addCategoryFilter = function (e) {
        var categoryFilter = this.categoryFilter;
        if (e.target.checked) {
            categoryFilter.push(e.target.value);
            //remove currency from list
            //this.currencys.remove(e.target.value);
        }
        else {
            var index = categoryFilter.indexOf(e.target.value);
            if (index != -1) {
                categoryFilter.splice(index, 1);
            }
        }
        this.theFilter['categorys'] = categoryFilter;
    };
    ClearanceSalesComponent.prototype.addProductTypeFilter = function (event) {
        var productTypeFilter = this.productTypeFilter;
        if (event.target.checked) {
            productTypeFilter.push(event.target.value);
            //remove currency from list
            //this.currencys.remove(e.target.value);
        }
        else {
            var index = productTypeFilter.indexOf(event.target.value);
            if (index != -1) {
                productTypeFilter.splice(index, 1);
            }
        }
        this.theFilter['productTypes'] = productTypeFilter;
    };
    ClearanceSalesComponent.prototype.applyFilter = function () {
        // let filters = {};
        // filters['prices'] = this.theFilter;
        // filters['categories'] = this.categoryFilter;
        // filters['productTypes'] = this.productTypeFilter;
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.productSrv.fetchClearance(params['category'], params['productType'], params['sub'], _this.theFilter);
        })
            .subscribe(function (res) {
            _this.products = res;
            console.log(_this.products);
        }, function (err) {
            console.log(err);
        });
    };
    ClearanceSalesComponent.prototype.fetchProductTypes = function (pt) {
        var _this = this;
        this.productTypeSrv.fetchProductTypes(pt).subscribe(function (data) {
            _this.productTypes = data;
        }, function (err) {
            console.log(err);
        });
    };
    ClearanceSalesComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categorySrv.fetchCategories().subscribe(function (data) {
            _this.categorys = data.results;
        }, function (error) {
            var msg = JSON.parse(error._body)['message'];
            _this.error = msg;
        });
        //.then(response => this.categorys = response.results)
    };
    ClearanceSalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clearance-sales',
            template: __webpack_require__("./src/app/components/Catergory/clearance-sales/clearance-sales.component.html"),
            styles: [__webpack_require__("./src/app/components/Catergory/clearance-sales/clearance-sales.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__services_product_types_service__["a" /* ProductTypesService */], __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__services_product_types_service__["a" /* ProductTypesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */]])
    ], ClearanceSalesComponent);
    return ClearanceSalesComponent;
}());



/***/ }),

/***/ "./src/app/components/Catergory/new-arrivals/new-arrivals.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [cart] =\"cart\"></app-header>\r\n<section class=\"padded\" style=\"\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n       <!-- filter section -->\r\n\r\n        <div id=\"accordion\" role=\"tablist\">\r\n          <!-- start filter box -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" role=\"tab\" id=\"FilterTab\">\r\n                  <h5 class=\"mb-0\">\r\n                    <a class=\"boldest\" data-toggle=\"collapse\" href=\"#FilterTabPanel\" aria-expanded=\"true\" aria-controls=\"FilterTabPanel\">\r\n                     Filter\r\n                    </a>\r\n                    <span class=\"icon float-right\"><i class=\"ion-plus-round\"></i></span>\r\n                     <button class=\"btn btn-secondary btn-block filter-btn\" (click)=\"applyFilter()\">Apply</button>\r\n                  </h5>\r\n                </div>\r\n\r\n                <div id=\"FilterTabPanel\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\" style=\"padding-right: 15px;\">\r\n                  <ul class=\"nav flex-column\">\r\n                    <!-- update filter button -->\r\n                    <div style=\"margin-bottom: 10px\">\r\n                        <label>Price Range</label>\r\n                        <input type=\"text\" class=\"range-slider\" value=\"\" />\r\n                     \r\n                    </div>\r\n                  </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end filter box -->\r\n<!--  <div class=\"card\">\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n      <h5 class=\"mb-0\">\r\n        <a class=\"boldest\" data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n         Categories\r\n        </a>\r\n        <span class=\"icon float-right\"><i class=\"ion-plus-round\"></i></span>\r\n      </h5>\r\n    </div>\r\n\r\n    <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n      <div class=\"card-body\">\r\n      <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\" >\r\n        <div *ngFor=\"let item of categorys\">\r\n          <label for=\"{{item.slug}}\">\r\n            <input type=\"checkbox\" id=\"{{item.slug}}\"   value=\"{{item.slug}}\" (change)=\"addCategoryFilter($event)\"> &nbsp;\r\n                  {{item.name}}\r\n            </label>\r\n        </div>\r\n\r\n\r\n      </li>\r\n\r\n    </ul>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\r\n      <h5 class=\"mb-0\">\r\n        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n          Product Type\r\n        </a>\r\n        <span class=\"icon float-right\"><i class=\"ion-plus-round\"></i></span>\r\n      </h5>\r\n    </div>\r\n    <div id=\"collapseTwo\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n      <div class=\"card-body\">\r\n        <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\" >\r\n        <div *ngFor=\"let productType of productTypes\">\r\n          <label for=\"{{productType.slug}}\">\r\n          <input type=\"checkbox\" id=\"{{productType.slug}}\"  value=\"{{productType.slug}}\" (change)=\"addProductTypeFilter($event)\"> &nbsp;\r\n          {{productType.name}}\r\n        </label>\r\n        </div>\r\n\r\n\r\n\r\n      </li>\r\n\r\n    </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n</div>\r\n      </div>\r\n      <div class=\"col-sm-8 offset-md-1\">\r\n        <h5 class=\"boldest\">\r\n          <!-- You searched for \"{sample search results}\" -->\r\n          {{category}} > {{productType}} > {{sub}}\r\n        </h5>\r\n        <p style=\"font-size: 12px\"><b>{{arrivals?.length || '0'}}</b> Item(s) found</p>\r\n        <!--  -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\" *ngFor=\"let arrival of arrivals\">\r\n            <!-- overall link for product and title -->\r\n          <!--   <a href=\"\"> -->\r\n              <div class=\"product-component text-center\">\r\n            <div class=\"product-image\">\r\n            <a routerLink=\"/product/{{arrival.id}}/{{arrival.slug}}\">\r\n              <img src=\"{{arrival.banner_image}}\" alt=\"product image\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"product-title\">\r\n              <h6 class=\"\" style=\"text-align: center;margin: 0;padding: 10px 0 0;\">\r\n              <a style=\"color: #011936\" routerLink=\"/product/{{arrival.id}}/{{arrival.slug}}\">{{arrival.name}}</a></h6>\r\n              <span class=\"text-center\">\r\n                <span>{{t.getItem('currency')}}</span><b>{{arrival.sale_price * t.getItem('rate')|number}}</b>\r\n              </span>\r\n              </div>\r\n            </div>\r\n           <!--  </a> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/components/Catergory/new-arrivals/new-arrivals.component.scss":
/***/ (function(module, exports) {

module.exports = ".avatar {\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  border-radius: 50%;\n  text-align: center;\n  background: #011936;\n  color: #EB5757;\n  font-size: 25px; }\n\n.progress {\n  margin-bottom: 15px; }\n\n.product-component img {\n  width: 100%; }\n\n.product-component .product-title {\n  margin-top: 10px; }\n\n.card {\n  border: 0;\n  margin-bottom: 15px;\n  margin-bottom: 15px;\n  -webkit-box-shadow: 2px 2px 5px #ddd;\n          box-shadow: 2px 2px 5px #ddd; }\n\n.card-body {\n  padding: 1.25rem 5px; }\n\n.card-body a {\n    font-weight: 100;\n    color: #EB5757; }\n\n.card-header {\n  border: 0;\n  padding: 20px; }\n\n.card-header h5 {\n    font-family: \"Montserrat\", sans-serif;\n    color: #011936;\n    font-size: 15px; }\n\n.card-header h5 a {\n      color: #011936;\n      text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/Catergory/new-arrivals/new-arrivals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewArrivalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/components/Catergory/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_types_service__ = __webpack_require__("./src/app/components/Catergory/services/product-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__("./src/app/components/Catergory/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewArrivalsComponent = /** @class */ (function () {
    function NewArrivalsComponent(productSrv, productTypeSrv, categorySrv, route) {
        this.productSrv = productSrv;
        this.productTypeSrv = productTypeSrv;
        this.categorySrv = categorySrv;
        this.route = route;
        this.t = localStorage;
        this.categoryFilter = [];
        this.productTypeFilter = [];
        this.theFilter = {};
    }
    NewArrivalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.productSrv.fetchNewArrivals().then(response => this.arrivals = response.results)
        var t = this.route;
        var productFilter = this.theFilter;
        var category = this.category;
        var a = this;
        this.route.params.switchMap(function (params) {
            return _this.productSrv.fetchClearance(params['category'], params['productType'], params['sub']);
        })
            .subscribe(function (res) {
            _this.arrivals = res;
            _this.category = t.snapshot.params['category'];
            _this.productType = t.snapshot.params['productType'];
            _this.sub = t.snapshot.params['sub'];
            a.fetchProductTypes(_this.category);
        }, function (err) {
            console.log(err);
        });
        $(".range-slider").ionRangeSlider({
            'type': 'double',
            onStart: function (data) {
                // console.log("onStart");
            },
            onChange: function (data) {
                // console.log("onChange");
                productFilter['minPrice'] = data['from'];
                productFilter['maxPrice'] = data['to'];
            }
        });
        $('.filter-btn').click(function (e) {
            e.preventDefault();
            var button_text = $(this).text();
            // setTimeout(function(){
            $(this).text('Loading ...');
            // },2000);
        });
    };
    ;
    NewArrivalsComponent.prototype.fetchProductTypes = function (pt) {
        var _this = this;
        this.productTypeSrv.fetchProductTypes(pt).subscribe(function (res) {
            _this.productTypes = res;
        }, function (err) {
            console.log(err);
        });
    };
    NewArrivalsComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categorySrv.fetchCategories().subscribe(function (res) {
            _this.categorys = res;
        }, function (err) {
            console.log(err);
        });
    };
    NewArrivalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-arrivals',
            template: __webpack_require__("./src/app/components/Catergory/new-arrivals/new-arrivals.component.html"),
            styles: [__webpack_require__("./src/app/components/Catergory/new-arrivals/new-arrivals.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_product_types_service__["a" /* ProductTypesService */], __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_product_types_service__["a" /* ProductTypesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], NewArrivalsComponent);
    return NewArrivalsComponent;
}());



/***/ }),

/***/ "./src/app/components/Catergory/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
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



var CategoryService = /** @class */ (function () {
    function CategoryService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.categoryURL = this.globals.CATEGORYS_URL;
    }
    CategoryService.prototype.fetchCategories = function () {
        return this.http.get(this.categoryURL);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__shared_api__["a" /* Globals */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/components/Catergory/services/product-types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypesService; });
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



var ProductTypesService = /** @class */ (function () {
    function ProductTypesService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.productTypeURL = this.globals.PRODUCTS_TYPES_URL;
    }
    // fetchProductTypes(category?: string){
    //   return this.http.get(this.productTypeURL  +'?&category=' + category)
    //             .map(this.extractData)
    //       .catch(this.handleErrorObservable);
    // };
    ProductTypesService.prototype.fetchProductTypes = function (category) {
        // let params = new HttpParams().set('l1category', category)
        return this.http.get(this.productTypeURL + '?&l1category=' + category);
    };
    ProductTypesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__shared_api__["a" /* Globals */]])
    ], ProductTypesService);
    return ProductTypesService;
}());



/***/ }),

/***/ "./src/app/components/Catergory/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.productsUrl = this.globals.PRODUCTS_URL;
        this.productsByStoreUrl = this.globals.PRODUCTS_BY_STORE_URL;
        this.productsByCategoryUrl = this.globals.PRODUCTS_BY_CATEGORY_URL;
        this.productsClearanceUrl = this.globals.CLEARANCES_URL;
        this.newArrivalsUrl = this.globals.NEW_ARRIVALS_URL;
        this.forHerUrl = this.globals.FOR_HER_URL;
        this.forHimUrl = this.globals.FOR_HIM_URL;
        this.searchUrl = this.globals.SEARCH_URL;
        this.reviewsUrl = this.globals.REVIEWS_URL;
    }
    ProductService.prototype.fetchProductsByStore = function (data) {
        return this.http.get(this.productsByStoreUrl + data + '/')
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.fetchProductsByCategory = function (x, y, z, a) {
        var productTypes = '';
        if (a && a['productTypes']) {
            productTypes = a['productTypes'];
        }
        ;
        var min_price = '';
        var max_price = '';
        if (a && a['minPrice'] && a['maxPrice']) {
            min_price = a['minPrice'];
            max_price = a['maxPrice'];
        }
        ;
        return this.http.get(this.productsByCategoryUrl + x + '/' + y + '/' + z + '/' + '?&productTypes=' + productTypes
            + '&min_price=' + min_price + '&max_price=' + max_price)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.findProductByUUID = function (data) {
        return this.http.get(this.productsUrl + data + '/')
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    ;
    ProductService.prototype.fetchClearance = function (x, y, z, a) {
        var productTypes = '';
        if (a && a['productTypes']) {
            productTypes = a['productTypes'];
        }
        var min_price = '';
        var max_price = '';
        if (a && a['minPrice'] && a['maxPrice']) {
            min_price = a['minPrice'];
            max_price = a['maxPrice'];
        }
        return this.http.get(this.productsClearanceUrl + x + '/' + y + '/' + z + '/' + '?&productTypes=' + productTypes
            + '&min_price=' + min_price + '&max_price=' + max_price)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.fetchNewArrivals = function () {
        return this.http.get(this.newArrivalsUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.fetchHim = function () {
        return this.http.get(this.forHimUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.fetchHer = function () {
        return this.http.get(this.forHerUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.searchProduct = function (data) {
        console.log(this.searchUrl + '?q=' + data);
        return this.http.get(this.searchUrl + '?q=' + data)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.saveNewReview = function (review) {
        //  headers.append('Content-Type', 'multipart/form-data');
        var formData = new FormData();
        formData.append('reviewer_email', review['email']);
        formData.append('reviewer_name', review['name']);
        formData.append('comment', review['comment']);
        formData.append('product', review['product']);
        return this.http.post(this.reviewsUrl, formData).map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductService.prototype.handleErrorObservable = function (error) {
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(error.message || error);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_api__["a" /* Globals */]])
    ], ProductService);
    return ProductService;
}());



/***/ })

});
//# sourceMappingURL=Catergory.module.chunk.js.map