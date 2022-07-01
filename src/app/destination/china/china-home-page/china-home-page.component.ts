import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-china-home-page',
  templateUrl: './china-home-page.component.html',
  styleUrls: ['./china-home-page.component.scss']
})
export class ChinaHomePageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  url = 'https://www.china-reisen.de/media/China/Bilder/china-reisen-grosse-mauer-peking.jpg?v=1532682205';
  


}
