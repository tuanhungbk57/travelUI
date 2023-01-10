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
   companyName: string = "";
   ceo: string = "";
   address: string = "";
   phone: string = "";
   email: string = "";

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
      this.companyName = this.company.CompanyName;
      this.ceo = this.company.Ceo;
      this.address = this.company.Address;
      this.phone = this.company.Phone;
      this.email = this.company.Email;
    })
  }
}
