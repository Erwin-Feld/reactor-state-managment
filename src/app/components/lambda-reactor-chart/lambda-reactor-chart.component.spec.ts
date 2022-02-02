import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaReactorChartComponent } from './lambda-reactor-chart.component';

describe('LambdaReactorChartComponent', () => {
  let component: LambdaReactorChartComponent;
  let fixture: ComponentFixture<LambdaReactorChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LambdaReactorChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaReactorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
