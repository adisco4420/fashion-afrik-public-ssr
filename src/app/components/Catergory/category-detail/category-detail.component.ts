import { Component, OnInit, OnChanges } from '@angular/core';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import 'rxjs/add/operator/switchMap';
import { Globals } from '../../../shared/api';
import { ProductService } from '../services/product.service';
import { ProductTypesService } from '../services/product-types.service';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { ColorService } from '../../../services/color.service';

declare var $: any;

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit, OnChanges {
  t = localStorage;
  products: any[];
  categorys: any[];
  productTypes: any[];
  host_address: string = this.globals.HOST_URL;
  category: string;
  productType: string;
  sub: string;
  categoryFilter = [];
  productTypeFilter = [];
  theFilter: Object = {};
  error: any;
  seoTitle: string;
  visibleCat: any[];
  fiterCat: string;
  filterBy = 'all';
  search_results: any[];
  searchClean: Subscription;
  colors: any[];

  colorTypes = [
    { name: 'red', selected: false, bg: 'btn btn-danger'},
    { name: 'yellow', selected: false, bg: 'btn btn-warning' },
    { name: 'grey', selected: false,  bg: 'btn btn-secondary'},
    { name: 'black', selected: false,  bg: 'btn btn-dark'},
    { name: 'blue', selected: false,  bg: 'btn btn-primary'},
    { name: 'brown', selected: false,  bg: 'btn btn-info'},
  ];

  priceTypes = [
    { name: 6250, selected: false , value: '10 -20'},
    { name: 10000, selected: false , value: '20 -30'},
    { name: 7500, selected: false , value: '30 - 40'}
  ];

  constructor(
    private productSrv: ProductService,
    private productTypeSrv: ProductTypesService,
    private categorySrv: CategoryService,
    private colorSrv: ColorService,
    private route: ActivatedRoute, private globals: Globals,
    private title: Title,
    private meta: Meta ,
    private state: TransferState) { }
    get selectedColorTypes() {
      return this.colorTypes.reduce((types, type) => {
        if (type.selected) {
          types.push(type.name);
        }
        return types;
      }, []);
    }
    get selectedPriceTypes() {
      return this.priceTypes.reduce((types, type) => {
        if (type.selected) {
          types.push(type.name);
        }
        return types;
      }, []);
    }
  ngOnInit() {
    if (this.categorys) {
      this.filterCategory(this.fiterCat);
    }
    this.fetchColors();
    this.filterCategory(this.fiterCat);
    const t = this.route;
    const productFilter = this.theFilter;
    const a = this;
    this.route.params.switchMap((params: Params) =>
      this.productSrv.fetchProductsByCategory(params['category'], params['productType'], params['sub']))
      .subscribe(
        res => {

          this.products = res.results;
          // console.log(res.results[0].colors[0].slug);
          this.products.forEach(item => {
            console.log(item.sale_price);
            if (item.sale_price <= 9000) {
              console.log('within 9000', item.sale_price);
            }
          });
          console.log(this.products);

          this.productType = t.snapshot.params['productType'];
          this.category = t.snapshot.params['category'];
          this.sub = t.snapshot.params['sub'];
         //  console.log(this.category, this.productType, this.sub);
           this.seoTitle = this.category + ' ' + this.productType +  ' '  + this.sub;
        //   console.log(this.seoTitle);
          // console.log(this.products);
          a.fetchProductTypes(this.category);
          this.title.setTitle(this.seoTitle);
          this.meta.updateTag({
              'description': 'African fashion to the world. Shop for the best african outfits , ready to ship worldwide today',
              'keyword': ' vogueafriq, africa, african fashion, nigerian fashion, owambe'
          });
        });
        console.log(this.products);
    this.fetchCategories();
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
//   $('.fa-check').click(function(e) {
//     console.log('btn click');
//     e.preventDefault();
//     $('.fa').toggleClass('.tog');
// });
  $("#menu-toggles").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
    $('.range-slider').ionRangeSlider({
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
      let button_text = $(this).text();
      // setTimeout(function(){
      $(this).text('Loading ...');
      // },2000);
    });
  }
  ngOnChanges() {
    if (this.categorys) {
      this.filterCategory(this.fiterCat);
    }
  }
  addCategoryFilter(e) {

    let categoryFilter = this.categoryFilter;
    if (e.target.checked) {
      categoryFilter.push(e.target.value);
      // remove currency from list
      // this.currencys.remove(e.target.value);

    } else {

      let index = categoryFilter.indexOf(e.target.value);
      if (index != -1) {
        categoryFilter.splice(index, 1);
      }
    }
    this.theFilter['categorys'] = categoryFilter;

  }

  addProductTypeFilter(event) {

    let productTypeFilter = this.productTypeFilter;
    if (event.target.checked) {
      productTypeFilter.push(event.target.value);
      // remove currency from list
      // this.currencys.remove(e.target.value);

    }
    else {

      let index = productTypeFilter.indexOf(event.target.value);
      if (index != -1) {
        productTypeFilter.splice(index, 1);
      }

    }
    this.theFilter['productTypes'] = productTypeFilter;



  }

  applyFilter() {
    // let filters = {};
    // filters['prices'] = this.theFilter;
    // filters['categories'] = this.categoryFilter;
    // filters['productTypes'] = this.productTypeFilter;

    this.route.params.switchMap((params: Params) =>
      this.productSrv.fetchProductsByCategory(params['category'], params['productType'], params['sub'], this.theFilter))
      .subscribe(
        res => {

          this.products = res.results;
        //  console.log(res);

        //  console.log(this.products);
        }, err => {

          console.log(err);
        });
  }
  fetchColors() {
    this.colorSrv.fetchColors().subscribe(res => {
      this.colors = res.data;
      console.log(this.colors );
    });
  }
  fetchProductTypes(pt) {
    this.productTypeSrv.fetchProductTypes(pt).subscribe(
      res => {

        this.productTypes = res.results;
       //  console.log(this.productTypes);
      }, err => {

        console.log(err);
      });
  }

  addToWishlist(nameWishlist, imgWishlist) {
    console.log('add to cart');
    console.log(nameWishlist, imgWishlist);
  }
  fetchCategories() {
    this.categorySrv.fetchCategories().subscribe(
      res => {

        this.categorys = res.data;
       // console.log(res);
       //  console.log(this.categorys);
      }, err => {

        console.log(err);
      });
  }
  filterCategory(filter) {
    this.visibleCat = this.products;
    console.log('cat', this.visibleCat);
    if (filter === 'all') {
      this.visibleCat = this.products.slice(0);
     // console.log('cat', this.visibleCat);
    }
    // } else {
    //   this.visibleCat = this.products.filter(products => {
    //     return products.l1category.name.toLowerCase()  === filter;
    //   });
    // }
  }

}
