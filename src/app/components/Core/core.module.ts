import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { LandingComponent } from '../landing/landing.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [LandingComponent,
    FooterComponent],
    exports: [ LandingComponent, FooterComponent, AppRoutingModule, CommonModule],
    imports: [SharedModule, AppRoutingModule, CommonModule]
}) 


export class CoreModule {}
