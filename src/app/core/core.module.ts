import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './service/sidenav.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    
    declarations: [SidenavComponent],
  imports: [
    CommonModule, RouterModule,BrowserAnimationsModule, SharedModule
  ],
  providers:[SidenavService],
  exports:[SidenavComponent]
})
export class CoreModule { }
