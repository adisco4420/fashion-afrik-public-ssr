import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';

import { ProductService } from '../../services/product.service';
import { NewArrivalsService } from '../../services/new-arrivals.service';
import { Subscription } from 'rxjs/RX';
import { CurrencyService } from '../../services/currency.service';
import { ExchangeRateService } from '../../services/exchange-rate.service';



const STATE_KEY_NEWARRIVALS = makeStateKey('newArrival');
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [ ProductService, NewArrivalsService]
})
export class LandingComponent implements OnInit , OnDestroy{

  newArrivals: any[];
  error: any;
  arrivalClean: Subscription;
  t = localStorage;
  currencys: any[];
  exchange_rates: any[];
  product: Object = {};

  constructor(
    private productSrv: ProductService,
    private newArrivalSrv: NewArrivalsService,
    private title: Title,
    private meta: Meta ,
    private state: TransferState,
    private currencySrv: CurrencyService,
    private rateSrv: ExchangeRateService,
        ) { }

  ngOnInit() {
    this.title.setTitle('Home / VogueAfriq');
    this.meta.updateTag({
        'description': 'African fashion to the world. Shop for the best african outfits , ready to ship worldwide today',
        'keyword': ' vogueafriq, africa, african fashion, nigerian fashion, owambe'
    });
    this.fetchNewArrivals();
  }

  fetchNewArrivals() {
    this.arrivalClean = this.state.get(STATE_KEY_NEWARRIVALS, <any>[]);
   this.arrivalClean = this.newArrivalSrv.fetchNewArrivals()
    .subscribe(res => {
      this.newArrivals = res.results;
      for (const arrival of this.newArrivals) {
          console.log(arrival.name);
      }
      console.log(this.newArrivals);
    }, err => {
      console.log(err);
    });
  }
  fetchCurrencys() {

    this.currencySrv.fetchCurrencys().subscribe(
      res => {
      //  console.log(res.data);
        this.currencys = res.data;
        // console.log(this.currencys);
      }, err => {
        console.log(err);
      });
  }


  fetchExchangeRates() {
    this.rateSrv.fetchRates().subscribe((res: any) => {
      this.exchange_rates = res.results;
      // console.log(this.exchange_rates);

      const selected_currency = this.exchange_rates.find(x => x['currency']['code'] === localStorage.getItem('currency'));
      // localStorage.setItem('rate', selected_currency.rate);

      if (this.product && this.product['currency  ']) {
        if (!(this.product['currency']['code'] === selected_currency['currency']['code'])) {


          localStorage.setItem('rate', selected_currency['rate']);
        } else {
          localStorage.setItem('rate', String(1));
        }

      }
    }, err => {
      console.log(err);
    })

  }

  changeCurrency(evt) {
    localStorage.setItem('currency', evt.target.value);
    const selected_currency = this.exchange_rates.find(x => x['currency']['code'] === localStorage.getItem('currency'));

    if (!(this.product['currency']['code'] === selected_currency['currency']['code'])) {

      localStorage.setItem('rate', selected_currency['rate']);
    } else {
      localStorage.setItem('rate', String(1));
    }

  };

  numbersOnly(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnDestroy() {
    this.arrivalClean.unsubscribe();
  }
}
