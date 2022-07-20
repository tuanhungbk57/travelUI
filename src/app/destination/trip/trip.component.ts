import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/service/tour.service';
import { TripService } from 'src/app/service/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  tours: any[] = [];
  trip: any;
  path: string = "";

  constructor(private route: ActivatedRoute,public tripService: TripService, public tourService: TourService) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.params['path'];
    this.getDestList();
    this.getDetail();
  }

   /**
   * Lấy về chi tiết 1 điểm đến và hiển thị lên giao diện
   *
   * @memberof DestinationPageComponent
   */
    getDetail(){
      this.tripService.getByPath(this.path).subscribe((data: any) =>{
        this.trip = data;
      })
    }

  /**
   * Lấy về danh sách tour để show len giao diện
   *
   * @memberof TripComponent
   */
  getDestList(){
    this.tourService.getList().subscribe((data: any)=>{
      this.tours = this.tourService.splitArrayIntoChunks(data, 3);
    })
  }

}
