import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';

import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [LandingComponent,
    FooterComponent, NotFoundPageComponent],
    exports: [ LandingComponent, FooterComponent, NotFoundPageComponent, AppRoutingModule, CommonModule],
    imports: [
        SharedModule,
        AppRoutingModule,
        CommonModule,
        HttpClientJsonpModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})


export class CoreModule {}
