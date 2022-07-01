import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-img',
  templateUrl: './destination-img.component.html',
  styleUrls: ['./destination-img.component.scss']
})
export class DestinationImgComponent implements OnInit {

  constructor() { }
  @Input() imgURL = '';
  @Input() content = '';
  @Input() btncontent = '';
  @Input() title = '';

  ngOnInit(): void {
  }

}
