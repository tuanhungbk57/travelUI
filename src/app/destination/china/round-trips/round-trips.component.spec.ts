import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTripsComponent } from './round-trips.component';

describe('RoundTripsComponent', () => {
  let component: RoundTripsComponent;
  let fixture: ComponentFixture<RoundTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
