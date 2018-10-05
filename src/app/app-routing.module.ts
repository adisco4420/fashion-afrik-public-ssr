import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { LandingComponent } from './components/Core/landing/landing.component';
import { NotFoundPageComponent } from './components/Core/not-found-page/not-found-page.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'store/:store', component: StoreDetailComponent },
    // lazy loading
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
