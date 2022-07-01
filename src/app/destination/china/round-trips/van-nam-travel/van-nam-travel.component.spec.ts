import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanNamTravelComponent } from './van-nam-travel.component';

describe('VanNamTravelComponent', () => {
  let component: VanNamTravelComponent;
  let fixture: ComponentFixture<VanNamTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanNamTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanNamTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
