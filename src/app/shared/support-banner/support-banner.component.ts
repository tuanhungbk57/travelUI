import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-banner',
  templateUrl: './support-banner.component.html',
  styleUrls: ['./support-banner.component.scss']
})
export class SupportBannerComponent implements OnInit {

  constructor() { }

  tel: string = "+49 89-127091-0"
  @Input() logoLink: string = "https://www.asien-special-tours.de/assets/images/logos/ast-gold.svgz?1511349000";
  @Input() title: string = "";
  @Input() phone: string = "";
  @Input() worktime: string = "";


  ngOnInit(): void {
  }


}
