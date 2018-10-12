import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';

import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ProductService } from '../../../services/product.service';
import { NewArrivalsService } from '../../../services/new-arrivals.service';
import { Subscription } from 'rxjs/RX';
import { CurrencyService } from '../../../services/currency.service';
import { ExchangeRateService } from '../../../services/exchange-rate.service';



const STATE_KEY_NEWARRIVALS = makeStateKey('newArrival');
interface MailChimpResponse {
  result: string;
  msg: string;
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [ ProductService, NewArrivalsService]
})
export class LandingComponent implements OnInit , OnDestroy{

  newArrivals: any[];
 // error: any;
  arrivalClean: Subscription;
  t = localStorage;
  currencys: any[]; 
  exchange_rates: any[];
  product: Object = {};

  // mail chip
  submitted = false;
	mailChimpEndpoint = 'https://firebaseapp.us19.list-manage.com/subscribe/post-json?u=68c35c843530313a39249f623&amp;id=83a66f7266';
  error = '';
  emailControl: FormControl;
  nameControl: FormControl;
  newsletterSubmit: boolean;

  constructor(
    private productSrv: ProductService,
    private newArrivalSrv: NewArrivalsService,
    private title: Title,
    private meta: Meta ,
    private state: TransferState,
    private currencySrv: CurrencyService,
    private rateSrv: ExchangeRateService,
    private http: HttpClient,
        ) {

            // reactive form components
          this.emailControl = new FormControl('', [
            Validators.required,
            Validators.email,
          ]);
          this.nameControl = new FormControl('', [
            Validators.required
          ]);
        }

  ngOnInit() {
    this.title.setTitle('Home / VogueAfriq');
    this.meta.updateTag({
        'description': 'African fashion to the world. Shop for the best african outfits , ready to ship worldwide today',
        'keyword': ' vogueafriq, africa, african fashion, nigerian fashion, owambe'
    });
    this.fetchNewArrivals();
    this.submit();
    
  }

  // mail chip
  submit() {
    this.newsletterSubmit = true;
		this.error = '';
		if (this.emailControl.status === 'VALID' && this.nameControl.status === 'VALID') {
			const params = new HttpParams()
				.set('NAME', this.nameControl.value)
				.set('EMAIL', this.emailControl.value)
				.set('fcba49cd42ba26c466b9bdbe8555151e-us19', ''); // hidden input name

			const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
			this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
				if (response.result && response.result !== 'error') {
					this.submitted = true;
				}
				else {
					this.error = response.msg;
				}
			}, error => {
				console.error(error);
				this.error = 'Sorry, an error occurred.';
			});
		}
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
