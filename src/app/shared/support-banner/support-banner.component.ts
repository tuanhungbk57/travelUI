import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-banner',
  templateUrl: './support-banner.component.html',
  styleUrls: ['./support-banner.component.scss']
})
export class SupportBannerComponent implements OnInit {

  constructor() { }

  tel: string = "+49 89-127091-0"

  ngOnInit(): void {
  }


}
