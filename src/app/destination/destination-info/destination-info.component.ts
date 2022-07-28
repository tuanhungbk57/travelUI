import { Component, OnInit } from '@angular/core';
import { DestinationInfoService } from 'src/app/service/destination-info.service';
import { DestinationService } from 'src/app/service/destination.service';

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

  desInfo: any;
  dests: any[] = [];

  constructor(public desInfoService: DestinationInfoService, public destinationService: DestinationService) { }

  ngOnInit(): void {
    this.getDesInfo();
    this.getDestList();
  }

  getDesInfo(){
    this.desInfoService.getInfo().subscribe((data: any) =>{
      this.desInfo = data;
    })
  }

  getDestList(){
    this.destinationService.getList().subscribe((data: any)=>{
      this.dests = this.destinationService.splitArrayIntoChunks(data, 3);
    })
  }

}
