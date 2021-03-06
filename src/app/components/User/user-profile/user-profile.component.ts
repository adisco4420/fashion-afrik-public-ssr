import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],

})
export class UserProfileComponent implements OnInit {

  orders: any[] = [];
  customer: any = {};
  wishlists: any[] = [];

  constructor(
    private orderSrv: OrderService,
    private wishlistSrv: WishlistService,
    private userSrv: UserService,
    private router: Router) { }

  ngOnInit() {

    this.fetchCustomer();
    this.fetchOrders();
    this.fetchWishlist();
  }

  fetchOrders() {

    this.orderSrv.getOrders().subscribe(res => {

      this.orders = res.data;
      console.log(this.orders);
    }, err => {

      console.log(err);
    });
  }
  fetchWishlist() {
    this.wishlistSrv.getWishlist().subscribe(res => {

      this.wishlists = res.data;
      console.log(this.wishlists);
    }, err => {

      console.log(err);
    });
  }

  fetchCustomer() {

    this.customer = JSON.parse(localStorage.getItem('customer'));
    // console.log(this.customer);
  }

  logout() {
    this.userSrv.logout().subscribe(res => {
      localStorage.clear();
      this.router.navigate(['/login']);
    }, err => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }

}
