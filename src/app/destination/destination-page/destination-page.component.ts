import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Component thể hiện thông tin điểm đến của chúng tôi (danh sách các quốc gia)
 * ví dụ: https://www.asien-special-tours.de/reiselaender/
 * @export
 * @class DestinationPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.scss']
})
export class DestinationPageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  url = 'https://www.asien-special-tours.de/media/Asien_Special_Tours/Unsere_Reiseziele/Asien-Reisen-Asien-Special-Tours.jpg';

}
