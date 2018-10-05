
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// custom modules
import { MomentModule } from 'angular2-moment';
import { TextMaskModule } from 'angular2-text-mask';

import { CheckoutUserRoutes } from './CheckoutUser.routing';

import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';




@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CheckoutUserRoutes),
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MomentModule,
        TextMaskModule,
    ],
    declarations: [
        CheckoutComponent,
        ConfirmationComponent,
        PaymentComponent,
        ShippingComponent,
     
    ],
})
export class ChectoutUserModule { }