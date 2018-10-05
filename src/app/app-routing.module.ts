import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'search', component: SearchResultsComponent },
    { path: 'store/:store', component: StoreDetailComponent },


    { path: '', loadChildren: './components/Misc/misc.module#MiscModule'},
    { path: '', loadChildren: './components/User/user.module#UserModule'},
    { path: '', loadChildren: './components/Catergory/Catergory.module#CatergorysModule' },
    { path: '', loadChildren: './components/Products/products.module#ProductsModule'},
    { path: '', loadChildren: './components/CheckoutUser/CheckoutUser.module#ChectoutUserModule'},

    { path: 'not-found' , component: NotFoundPageComponent},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
