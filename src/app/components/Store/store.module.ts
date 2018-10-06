import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// module
import { SharedModule } from '../../shared/shared.module';
// routes
import { StoreRoutes } from './store.routing';
import { StoreDetailComponent } from './store-detail/store-detail.component';

@NgModule({
    imports: [
    CommonModule,
      RouterModule.forChild(StoreRoutes),
      SharedModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
       StoreDetailComponent
    ]
})

export class StoreModule {}