import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
// custom modules
import { MomentModule } from 'angular2-moment';
import { TextMaskModule } from 'angular2-text-mask';
// import { EcomProductZoomModalModule } from '@plency/ecom-product-zoom-modal';

import { AppRoutingModule } from './app-routing.module';
// api
import { Globals } from './shared/api';
// components
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';










@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        FooterComponent,
        ShoppingCartComponent,
        CheckoutComponent,
        SearchResultsComponent,
        ConfirmationComponent,
        ShippingComponent,
        PaymentComponent,
        StoreDetailComponent,
        WishlistComponent,
        NotFoundPageComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MomentModule,
        TextMaskModule,
        // EcomProductZoomModalModule,
    ],
    providers: [Globals],
})
export class AppModule { }
