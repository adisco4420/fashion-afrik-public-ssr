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
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CurrencyService } from './services/currency.service';
import { ExchangeRateService } from './services/exchange-rate.service';
import { ProductTypesService } from './services/product-types.service';
import { CategoryService } from './services/category.service';
import { CoreModule } from './components/Core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        // LandingComponent,
        // FooterComponent,
        ShoppingCartComponent,
        SearchResultsComponent,
        StoreDetailComponent,
        WishlistComponent,
        NotFoundPageComponent,
    ],
    imports: [
        // CommonModule,
        // AppRoutingModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        CoreModule,
        ReactiveFormsModule,
        SharedModule,
        MomentModule,
        TextMaskModule,
        // EcomProductZoomModalModule,
    ],
    providers: [Globals,
                CurrencyService,
                ExchangeRateService,
                ProductTypesService,
                CategoryService
            ],
})
export class AppModule { }
