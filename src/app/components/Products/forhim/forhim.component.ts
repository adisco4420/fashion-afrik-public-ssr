import { Component, OnInit } from '@angular/core';
import { ForhimService } from '../services/forhim.service';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Globals } from '../../../shared/api';
import { ProductService } from '../services/product.service';
import { ProductTypesService } from '../services/product-types.service';
import { CategoryService } from '../services/category.service';

declare var $: any;

@Component({
  selector: 'app-forhim',
  templateUrl: './forhim.component.html',
  styleUrls: ['./forhim.component.scss'],
  providers: [ ProductService]
})
export class ForhimComponent implements OnInit {
  forhim: any[];
  t: any = localStorage;
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

  constructor(private forHimSrv: ForhimService, private productSrv: ProductService, private productTypeSrv: ProductTypesService,
    private categorySrv: CategoryService,
    private route: ActivatedRoute, private globals: Globals,
    private title: Title,
    private meta: Meta ,
    private state: TransferState,) { }

  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.title.setTitle('ForHim Products');
    this.meta.updateTag({
        'description': 'African fashion to the world. Shop for the best african outfits , ready to ship worldwide today',
        'keyword': ' vogueafriq, africa, african fashion, nigerian fashion, owambe'
    });
    let t = this.route;
    let productFilter = this.theFilter;
    let a = this;
    this.getForHim();
    this.productType = t.snapshot.params['productType'];
    this.category = t.snapshot.params['category'];
    this.sub = t.snapshot.params['sub'];
    // console.log(this.category, this.productType, this.sub);
    // console.log(this.products);
    a.fetchProductTypes(this.category);
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
      let button_text = $(this).text();
      // setTimeout(function(){
      $(this).text('Loading ...');
      // },2000);
    });
  }
  getForHim() {
    this.forHimSrv.fetchForHim().subscribe(
      res => {
        this.forhim = res.results;
      //  console.log(res.results);
      }, err => {
        console.log(err);
      }
    )
  }

  addCategoryFilter(e) {

    let categoryFilter = this.categoryFilter;
    if (e.target.checked) {
      categoryFilter.push(e.target.value);

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
        // console.log(this.categorys);
      }, err => {

        console.log(err);
      });

  }


}
