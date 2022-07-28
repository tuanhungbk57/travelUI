import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { QuestionComponent } from './question/question.component';
import { VisaComponent } from './visa/visa.component';
import { WorktimeComponent } from './worktime/worktime.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"newsletters", component: NewsletterComponent},
  {path:"our-team", component: OurTeamComponent},
  {path:"worktime", component: WorktimeComponent},
  {path:"question", component: QuestionComponent},
  {path:"communication", component: CommunicationComponent},
  {path:"visa", component: VisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceContactRoutingModule { }
