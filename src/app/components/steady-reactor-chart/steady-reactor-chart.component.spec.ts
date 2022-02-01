import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteadyReactorChartComponent } from './steady-reactor-chart.component';

describe('SteadyReactorChartComponent', () => {
  let component: SteadyReactorChartComponent;
  let fixture: ComponentFixture<SteadyReactorChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteadyReactorChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteadyReactorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
