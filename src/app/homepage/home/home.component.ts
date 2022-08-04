import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Company } from 'src/app/company/company';
import { Destination } from 'src/app/destination/model/destination';
import { CompanyService } from 'src/app/service/company.service';
import { DestinationService } from 'src/app/service/destination.service';
import { HomepageService } from 'src/app/service/homepage.service';
import { Homepage } from '../model/homepage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService, public companyService: CompanyService, 
    public homeService: HomepageService, public destinationService: DestinationService, private sanitizer: DomSanitizer) { }
  home: Homepage = new Homepage();
  company: Company = new Company();
  dests: any[] = [];

  ngOnInit(): void {
    this.getHomeInfo();
    this.getCompanyInfo();
    this.getDestList();
  }
  url = 'https://www.asien-special-tours.de/media/_processed_/3/6/csm_mynamar-reise-moenche_60f3add896.jpg';

  getHomeInfo(){
    this.homeService.getInfo().subscribe((data: any) =>{
      this.home = data;
      this.home.videoScript = this.sanitizer.bypassSecurityTrustHtml(this.home.videoScript);
    })
  }

  getCompanyInfo(){
    this.companyService.getCompanyInfo().subscribe((data:any) =>{
      this.company = data;
    })
  }

  getDestList(){
    this.destinationService.getList().subscribe((data: any)=>{
      this.dests = this.destinationService.splitArrayIntoChunks(data, 3);
    })
  }
  

}
