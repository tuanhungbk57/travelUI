import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DestinationService } from 'src/app/service/destination.service';
import { TripService } from 'src/app/service/trip.service';
import { Destination } from '../model/destination';

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
  des: any ;
  path: string = "";
  
  /**
   * Danh sách các trips
   *
   * @type {any[]}
   * @memberof DestinationPageComponent
   */
  trips: any[] = [];

  constructor(public translate: TranslateService, public destinationService: DestinationService, private route: ActivatedRoute, public tripService: TripService) { }
  ngOnInit(): void {
    this.path = this.route.snapshot.params['destpath'];
    this.getDetail();
    this.getTripList();
  }
 
  /**
   * Lấy về chi tiết 1 điểm đến và hiển thị lên giao diện
   *
   * @memberof DestinationPageComponent
   */
  getDetail(){
    this.destinationService.getByPath(this.path).subscribe((data: any) =>{
      this.des = data;
    })
  }

  
  /**
   * Lấy về danh sách các trips để hiển thị lên giao diện
   *
   * @memberof DestinationPageComponent
   */
  getTripList(){
    this.tripService.getList(this.path).subscribe((data: any)=>{
      this.trips = this.tripService.splitArrayIntoChunks(data, 3);
    })
  }

}
