import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChinaRoutingModule } from './china-routing.module';
import { ChinaHomePageComponent } from './china-home-page/china-home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoundTripsComponent } from './round-trips/round-trips.component';
import { LuxuryTripsComponent } from './round-trips/luxury-trips/luxury-trips.component';
import { VanNamTravelComponent } from './round-trips/van-nam-travel/van-nam-travel.component';
import { HighlightComponent } from './round-trips/highlight/highlight.component';
import { PearlsComponent } from './round-trips/pearls/pearls.component';
import { SilkRoadComponent } from './round-trips/silk-road/silk-road.component';
import { NatureTripsComponent } from './round-trips/nature-trips/nature-trips.component';
import { SouthernChinaComponent } from './round-trips/southern-china/southern-china.component';
import { HikingTourComponent } from './round-trips/hiking-tour/hiking-tour.component';


@NgModule({
  declarations: [
  
    ChinaHomePageComponent,
       RoundTripsComponent,
       LuxuryTripsComponent,
       VanNamTravelComponent,
       HighlightComponent,
       PearlsComponent,
       SilkRoadComponent,
       NatureTripsComponent,
       SouthernChinaComponent,
       HikingTourComponent
  ],
  imports: [
    CommonModule,
    ChinaRoutingModule,
    SharedModule
  ]
})
export class ChinaModule { }
