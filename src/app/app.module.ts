import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
// custom modules
import { MomentModule } from 'angular2-moment';
import { TextMaskModule } from 'angular2-text-mask';
// import { EcomProductZoomModalModule } from '@plency/ecom-product-zoom-modal';

import { AppRoutingModule } from './app-routing.module';
// api
import { Globals } from './shared/api';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';






@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        SharedModule,
        MomentModule,
        TextMaskModule,
        // EcomProductZoomModalModule,
    ],
    providers: [Globals],
})
export class AppModule { }
