import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'search', component: SearchResultsComponent },


    { path: '', loadChildren: './components/Misc/misc.module#MiscModule'},
    { path: '', loadChildren: './components/User/user.module#UserModule'},
    { path: '', loadChildren: './components/Catergory/Catergory.module#CatergorysModule' },

    { path: 'not-found' , component: NotFoundPageComponent},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
