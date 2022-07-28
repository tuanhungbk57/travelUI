import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { DestinationInfoComponent } from './destination-info/destination-info.component';
import { SharedModule } from '../shared/shared.module';
import { DestinationService } from '../service/destination.service';
import { TripComponent } from './trip/trip.component';
import { TourComponent } from './tour/tour.component';
import { TripService } from '../service/trip.service';
import { TourService } from '../service/tour.service';
import { DestinationInfoService } from '../service/destination-info.service';


/**
 * Module thể hiện danh sách các điểm đến quốc gia du lịch
 *
 * @export
 * @class DestinationModule
 */
@NgModule({
  declarations: [
    DestinationPageComponent,
    DestinationInfoComponent,
    TripComponent,
    TourComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule
  ],
  providers:[DestinationService, TripService, TourService, DestinationInfoService]
})
export class DestinationModule { }
