import { Component, OnInit } from '@angular/core';

/**
 * Component thể hiện thông tin du lịch chi tiết của 1 quốc gia
 * Ví dụ: https://www.vietnam-special-tours.de/
 * @export
 * @class DestinationInfoComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.scss']
})
export class DestinationInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
