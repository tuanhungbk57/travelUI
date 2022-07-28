import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService) { }
  sc: any;
  ngOnInit(): void {
    this.getContent();
  }
  getContent(){
    this.homeService.getContent().subscribe((data: any) =>{
      this.sc = data;
    })
  }

}
