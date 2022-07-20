import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationInfoComponent } from './destination-info/destination-info.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { TourComponent } from './tour/tour.component';
import { TripComponent } from './trip/trip.component';

const routes: Routes = [
  {
    path: '',
    component: DestinationPageComponent
  },
  {
    path: ':path',
    component: TripComponent
  },
  {
    path: ':path/:rout',
    component: TourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
