import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingTourComponent } from './hiking-tour.component';

describe('HikingTourComponent', () => {
  let component: HikingTourComponent;
  let fixture: ComponentFixture<HikingTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
