import { Injectable } from '@angular/core';
import { Globals } from '../../../shared/api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WishlistService {
  private wishlistUrl = this.globals.WISHLIST_URL;
  private addtoWishlistUrl = this.globals.ADDTOWISHLIST_URL;
  authToken = localStorage.getItem('token');
  customer = JSON.parse(localStorage.getItem('customer'));
  constructor(private http: HttpClient, private globals: Globals) { }

  saveWishlist(cart: any): Observable<any> {
    const data = {};

    data['cart'] = cart;
    data['currency'] = localStorage.getItem('currency');

    const headers = new HttpHeaders({ 'Authorization': 'JWT ' + this.authToken });

    return this.http.post(this.wishlistUrl, data, { headers });
  }

  postWishlist(data: any): Observable<any> {

    // console.log(data);

    const headers = new HttpHeaders({ 'Authorization': 'JWT ' + this.authToken });

    return this.http.post(this.addtoWishlistUrl, data, { headers });
  }

  getWishlist(): Observable<any> {

    const headers = new HttpHeaders({ 'Authorization': 'JWT ' + this.authToken });

    return this.http.get(this.wishlistUrl, { headers });
  }
}
