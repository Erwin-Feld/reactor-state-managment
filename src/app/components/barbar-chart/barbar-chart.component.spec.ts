import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbarChartComponent } from './barbar-chart.component';

describe('BarbarChartComponent', () => {
  let component: BarbarChartComponent;
  let fixture: ComponentFixture<BarbarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
