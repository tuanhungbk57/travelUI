import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path:':path',
    loadChildren:() =>import('./destination/destination.module').then(m =>m.DestinationModule)
  },
  {
    path:'service-contact',
    loadChildren:() =>import('./service-contact/service-contact.module').then(m =>m.ServiceContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
