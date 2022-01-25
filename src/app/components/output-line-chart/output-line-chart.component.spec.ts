import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLineChartComponent } from './output-line-chart.component';

describe('OutputLineChartComponent', () => {
  let component: OutputLineChartComponent;
  let fixture: ComponentFixture<OutputLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
