import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductTypesService } from '../services/product-types.service';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
  providers: [ProductService, ProductTypesService, CategoryService]
})
export class NewArrivalsComponent implements OnInit {

  t = localStorage;
  arrivals: any[];
  products: any[];
  categorys: any[];
  productTypes: any[];
  sales: any[];
  seoTitle: string;

  category: string;
  productType: string;
  sub: string;
  categoryFilter = [];
  productTypeFilter = [];
  theFilter: Object = {};
  error: any;
  constructor(private productSrv: ProductService, private productTypeSrv: ProductTypesService,
    private categorySrv: CategoryService, private route: ActivatedRoute,
    private title: Title,
    private meta: Meta ,
    private state: TransferState) { }

  ngOnInit() {
    //this.productSrv.fetchNewArrivals().then(response => this.arrivals = response.results)
    let t = this.route;
    let productFilter = this.theFilter;
    let category = this.category;
    let a = this
    this.route.params.switchMap((params: Params) =>
      this.productSrv.fetchClearance(params['category'], params['productType'], params['sub']))
      .subscribe(
        res => {
          this.arrivals = res.results;
          console.log(this.arrivals);
          
          this.category = t.snapshot.params['category'];
          this.productType = t.snapshot.params['productType'];
          this.sub = t.snapshot.params['sub'];
          this.seoTitle = this.category + ' ' + this.productType +  ' '  + this.sub;
          a.fetchProductTypes(this.category);
          this.title.setTitle(this.seoTitle);
          this.meta.updateTag({
              'description': 'African fashion to the world. Shop for the best african outfits , ready to ship worldwide today',
              'keyword': ' vogueafriq, africa, african fashion, nigerian fashion, owambe'
          });
        }, err => {
          console.log(err);
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
    })
  };

  addCategoryFilter(e) {

    let categoryFilter = this.categoryFilter;
    if (e.target.checked) {
      categoryFilter.push(e.target.value);
      //remove currency from list
      //this.currencys.remove(e.target.value);

    }
    else {

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
        //  console.log(this.products);
        }, err => {

          console.log(err);
        });
  }

  fetchProductTypes(pt) {
    this.productTypeSrv.fetchProductTypes(pt).subscribe(
      res => {

        this.productTypes = res.results;
        // console.log(this.productTypes);
      }, err => {

        console.log(err)
      });
  }



  fetchCategories() {

    this.categorySrv.fetchCategories().subscribe(
      res => {
        this.categorys = res.results;
      }, err => {
        console.log(err);
      });
  }

}
