import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryTripsComponent } from './luxury-trips.component';

describe('LuxuryTripsComponent', () => {
  let component: LuxuryTripsComponent;
  let fixture: ComponentFixture<LuxuryTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
