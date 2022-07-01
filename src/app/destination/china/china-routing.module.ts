import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChinaHomePageComponent } from './china-home-page/china-home-page.component';
import { LuxuryTripsComponent } from './round-trips/luxury-trips/luxury-trips.component';
import { RoundTripsComponent } from './round-trips/round-trips.component';

const routes: Routes = [
  {
    path: '',
    component: ChinaHomePageComponent
  },
  {
    path: 'round-trips',
    component: RoundTripsComponent
  },
  {
    path: 'round-trips/luxury-trips',
    component: LuxuryTripsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChinaRoutingModule { }
