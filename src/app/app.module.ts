import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// custom modules
import { MomentModule } from 'angular2-moment';
import { TextMaskModule } from 'angular2-text-mask';
// import { EcomProductZoomModalModule } from '@plency/ecom-product-zoom-modal';

import { AppRoutingModule } from './app-routing.module';
// api
import { Globals } from './shared/api';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';





@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LandingComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        MomentModule,
        TextMaskModule,
        // EcomProductZoomModalModule,
    ],
    providers: [Globals],
})
export class AppModule { }
