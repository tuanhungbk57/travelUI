import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/service/tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  tour: any;
  tourcontent: any[] = [];
  path: string = "";

  constructor(private route: ActivatedRoute, public tourService: TourService) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.params['rout'];
    this.getDetail();
  }

 /**
   * Lấy về chi tiết 1 điểm đến và hiển thị lên giao diện
   *
   * @memberof DestinationPageComponent
   */
  getDetail(){
    this.tourService.getByPath(this.path).subscribe((data: any) =>{
      this.tour = data;
      this.tourcontent = JSON.parse( data?.Content);
    })
  }
}
