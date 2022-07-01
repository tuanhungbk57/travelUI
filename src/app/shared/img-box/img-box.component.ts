import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss']
})
export class ImgBoxComponent implements OnInit {
  @Input() imgURL = '';
  @Input() text = '';
  @Input() textTarget = '';
  @Input() URLTarget = '';

  constructor() { }

  ngOnInit(): void {
  }

}
