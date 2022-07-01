import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PearlsComponent } from './pearls.component';

describe('PearlsComponent', () => {
  let component: PearlsComponent;
  let fixture: ComponentFixture<PearlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PearlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PearlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
