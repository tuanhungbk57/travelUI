import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationPageComponent } from './destination-page/destination-page.component';

const routes: Routes = [
  {
    path: '',
    component: DestinationPageComponent
  },
  {
    path: 'china',
    loadChildren: () => import('./china/china.module').then(m => m.ChinaModule)
  },
  {
    path: 'vietnamese',
    loadChildren: () => import('./vietnamese/vietnamese.module').then(m => m.VietnamesModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
