import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

// import { EcomProductZoomModalModule } from '@plency/ecom-product-zoom-modal';
import { CoreModule } from './components/Core/core.module';
// api
import { Globals } from './shared/api';
// components
import { AppComponent } from './app.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CurrencyService } from './services/currency.service';
import { ExchangeRateService } from './services/exchange-rate.service';
import { ProductTypesService } from './services/product-types.service';
import { CategoryService } from './services/category.service';


@NgModule({
    declarations: [
        AppComponent,
        // LandingComponent,
        // FooterComponent,
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
