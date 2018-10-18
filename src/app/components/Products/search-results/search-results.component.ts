import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductTypesService } from '../../../services/product-types.service';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../services/product.service';

import {Router, ActivatedRoute, Params} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [  CategoryService,  ProductTypesService, ProductService]
})
export class SearchResultsComponent implements OnInit, OnDestroy  {
  t = localStorage;
  search_results: any[];
  q: any;
  error: any;
  sub: any;
  routeSub: Subscription;
  searchClean: Subscription;
  sx: string;
  sxs: any;
  productCheck: any = {
    length: ''
  };
  constructor( private route: ActivatedRoute, private productSrv: ProductService, private router: Router) {

   }
  ngOnInit() {
    this.search();
    $('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
  });
  $('#menu-toggles').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
});  }
  search() {
    this.routeSub = this.route.params.subscribe(params => {
    //  console.log(params);
        this.sx = params['q'];
      //  console.log(this.router.url);
    });
  //  console.log(this.sx);

    // const query = this.route.snapshot.queryParams['q'];
    // console.log(query);
    // this.q = query;
    // this.sub = this.productSrv.searchProduct(this.sx);
    // console.log(this.sub);
    this.searchClean = this.productSrv.searchProduct(this.sx).subscribe(res => {
      this.productCheck = this.search_results = res.results;
    //  console.log(this.productCheck);
    }, err => {
        console.log(err);
    });
    // this.productCheck = (this.sx) ?
    //   this.sub : this.search_results;
  }
  searchProducts(search) {
    this.sxs  = search;
   this.router.navigate(['/search'], { queryParams: { q: search } });
  //  console.log(search);
  //  console.log('for search product', this.sx);
    this.searchClean = this.productSrv.searchProduct(search).subscribe(res => {
      this.search_results = res.results;
  //    console.log(this.search_results);
    }, err => {
        console.log(err);
    });
  }
  ngOnDestroy() {
     this.searchClean.unsubscribe();
  }

}
