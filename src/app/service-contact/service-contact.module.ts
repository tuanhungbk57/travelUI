import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceContactRoutingModule } from './service-contact-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CommunicationComponent } from './communication/communication.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { VisaComponent } from './visa/visa.component';
import { WorktimeComponent } from './worktime/worktime.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './service/contact.service';
import { CommunicationService } from './service/communication.service';
import { HomeService } from './service/home.service';
import { NewsletterService } from './service/newsletter.service';


@NgModule({
  declarations: [
    HomeComponent,
    CommunicationComponent,
    OurTeamComponent,
    VisaComponent,
    WorktimeComponent,
    NewsletterComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    ServiceContactRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers:[ContactService, CommunicationService, HomeService, NewsletterService]
})
export class ServiceContactModule { }
