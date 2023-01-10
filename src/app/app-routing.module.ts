import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'service-contact',
    loadChildren:() =>import('./service-contact/service-contact.module').then(m =>m.ServiceContactModule)
  },
  {
    path:'blog',
    loadChildren:() =>import('./blog/blog.module').then(m =>m.BlogModule)
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path:'destination',
    loadChildren:() =>import('./destination/destination.module').then(m =>m.DestinationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking', scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
