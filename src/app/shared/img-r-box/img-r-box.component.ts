import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-r-box',
  templateUrl: './img-r-box.component.html',
  styleUrls: ['./img-r-box.component.scss']
})
export class ImgRBoxComponent implements OnInit {

  constructor() { }
  @Input() imgURL = '';
  @Input() text = '';
  @Input() textTarget = '';
  @Input() URLTarget = '';


  ngOnInit(): void {
    
  }

}
