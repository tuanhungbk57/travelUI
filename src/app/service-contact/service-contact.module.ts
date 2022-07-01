import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceContactRoutingModule } from './service-contact-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ServiceContactRoutingModule,
    SharedModule
  ]
})
export class ServiceContactModule { }
