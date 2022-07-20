import { Component, OnInit } from '@angular/core';
import { Company } from './company/company';
import { SidenavService } from './core/service/sidenav.service';
import { CompanyService } from './service/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  company: Company = new Company();

  constructor(public sidebarservice: SidenavService, public companyService: CompanyService){}
  ngOnInit(): void {
    this.getCompanyInfo();
  }
  title = 'NTH.Travel';
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
 
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

  getCompanyInfo (){
    this.companyService.getCompanyInfo().subscribe((data: any) =>{
      this.company = data;
    })
  }
}
