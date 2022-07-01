import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaHomePageComponent } from './china-home-page.component';

describe('ChinaHomePageComponent', () => {
  let component: ChinaHomePageComponent;
  let fixture: ComponentFixture<ChinaHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinaHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinaHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
