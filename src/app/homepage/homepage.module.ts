import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageService } from '../service/homepage.service';
import { CompanyService } from '../service/company.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ],
  providers:[HomepageService, CompanyService]
})
export class HomepageModule { }
