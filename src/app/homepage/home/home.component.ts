import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  url = 'https://www.asien-special-tours.de/media/_processed_/3/6/csm_mynamar-reise-moenche_60f3add896.jpg';
  

}
