import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // import social buttons module
// import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
// module
import { SharedModule } from '../../shared/shared.module';

import { ProductsRoutes } from './products.routing';
// service
import { ForherService } from './services/forher.service';
import { ForhimService } from './services/forhim.service';
import { FabricService } from './../../services/fabric.service';
import { ColorService } from './../../services/color.service';
import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { ExchangeRateService } from './../../services/exchange-rate.service';
import { CurrencyService } from './../../services/currency.service';
import { SizeService } from './../../services/size.service';

// component
import { ForherComponent } from './forher/forher.component';
import { ForhimComponent } from './forhim/forhim.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductTypesService } from './services/product-types.service';
import { CategoryService } from './services/category.service';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(ProductsRoutes),
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    declarations: [
    //  HeaderComponent
        ForherComponent,
        ForhimComponent,
        ProductDetailComponent,
        SearchResultsComponent,
        ShoppingCartComponent
    ],
    providers: [
        ForherService,
        ForhimService,
        ProductService,
        CartService,
        ColorService,
        FabricService,
        SizeService,
        CurrencyService,
        ExchangeRateService,
        ProductTypesService,
        CategoryService,
        // ToastrService
    ]
  })
  export class ProductsModule { }