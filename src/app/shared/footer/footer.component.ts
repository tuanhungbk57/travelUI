import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() companyName: string = "";
  @Input() ceo: string = "";
  @Input() address: string = "";
  @Input() phone: string = "";
  @Input() email: string = "";

  constructor(public translate: TranslateService, public footerService: FooterService) { }

  ngOnInit(): void {
    this.getFooterByLang();
  }
  footer: any = {};
  getFooterByLang(){
    this.footerService.getFooterByLang().subscribe(data =>{
      this.footer.Lang = data.lang;
      this.footer.Id = data.id;
      this.footer.Column1 = JSON.parse(data.Column1)
      this.footer.Column2 = JSON.parse(data.Column2)
      this.footer.Column3 = data.Column3
      this.footer.Column4 = JSON.parse(data.Column4)
      this.footer.LabelColumn1 = data.LabelColumn1
      this.footer.LabelColumn2 = data.LabelColumn2
      this.footer.LabelColumn3 = data.LabelColumn3
      this.footer.LabelColumn4 = data.LabelColumn4
      this.footer.NewsColumn3 = data.NewsColumn3
    })
  }

}
