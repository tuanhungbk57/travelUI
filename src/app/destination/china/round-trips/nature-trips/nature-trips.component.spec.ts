import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureTripsComponent } from './nature-trips.component';

describe('NatureTripsComponent', () => {
  let component: NatureTripsComponent;
  let fixture: ComponentFixture<NatureTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
