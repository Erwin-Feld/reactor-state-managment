import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalOutputLineChartComponent } from './global-output-line-chart.component';

describe('GlobalOutputLineChartComponent', () => {
  let component: GlobalOutputLineChartComponent;
  let fixture: ComponentFixture<GlobalOutputLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalOutputLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalOutputLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
