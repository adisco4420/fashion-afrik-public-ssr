import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: '', loadChildren: './components/Misc/misc.module#MiscModule'},
    { path: '', loadChildren: './components/User/user.module#UserModule'},
    { path: '', loadChildren: './components/Catergory/Catergory.module#CatergorysModule' },

    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
