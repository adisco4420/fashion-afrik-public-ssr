import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: '', loadChildren: './components/Misc/misc.module#MiscModule'},

    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
