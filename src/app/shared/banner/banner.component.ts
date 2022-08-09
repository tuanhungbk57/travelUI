import { Component, OnInit, Input } from '@angular/core';
import { Homepage } from 'src/app/homepage/model/homepage';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
 
   _apiResponse: string = "";
  @Input() text = '';

  @Input() home: Homepage = new Homepage();
  @Input() 
  get imgURL(): any {return this._apiResponse;}
  set imgURL(value: any) {
    if(value){
      this._apiResponse = value;
      console.log(value);
      this.backgroundStyle = {'background': `url('${this._apiResponse}')`}
    }
    
    // do whatever else you want to do here
  }
  backgroundStyle = {'background': 'url('+this.imgURL+')'}


  ngOnInit(): void {
  }

}
