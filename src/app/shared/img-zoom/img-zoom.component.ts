import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-zoom',
  templateUrl: './img-zoom.component.html',
  styleUrls: ['./img-zoom.component.scss']
})
export class ImgZoomComponent implements OnInit {
  @Input() imgURL = '';
  @Input() text = '';
  @Input() URLTarget = '';

  constructor() { }

  ngOnInit(): void {
  }

}
