import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { DestinationInfoComponent } from './destination-info/destination-info.component';
import { SharedModule } from '../shared/shared.module';


/**
 * Module thể hiện danh sách các điểm đến quốc gia du lịch
 *
 * @export
 * @class DestinationModule
 */
@NgModule({
  declarations: [
    DestinationPageComponent,
    DestinationInfoComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule
  ]
})
export class DestinationModule { }
