import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-img',
  templateUrl: './destination-img.component.html',
  styleUrls: ['./destination-img.component.scss']
})
export class DestinationImgComponent implements OnInit {

  constructor() { }


  @Input() 
  get imgURL(): any {return this._apiResponse;}
  set imgURL(value: any) {
    if(value){
      this._apiResponse = value;
      console.log(value);
      this.backgroundStyle = {'background': `linear-gradient(0deg, rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${this._apiResponse}')`};
    }
    
    // do whatever else you want to do here
  }
   _apiResponse: string = "";
  backgroundStyle = {'background': `linear-gradient(0deg, rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${this._apiResponse}')`};

  @Input() content = '';
  @Input() btncontent = '';
  @Input() title = '';

  ngOnInit(): void {
  }

}
