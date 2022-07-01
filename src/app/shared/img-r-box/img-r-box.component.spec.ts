import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRBoxComponent } from './img-r-box.component';

describe('ImgRBoxComponent', () => {
  let component: ImgRBoxComponent;
  let fixture: ComponentFixture<ImgRBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgRBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgRBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
