import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthernChinaComponent } from './southern-china.component';

describe('SouthernChinaComponent', () => {
  let component: SouthernChinaComponent;
  let fixture: ComponentFixture<SouthernChinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthernChinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthernChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
