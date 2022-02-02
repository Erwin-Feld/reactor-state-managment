import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftReactorChartComponent } from './swift-reactor-chart.component';

describe('SwiftReactorChartComponent', () => {
  let component: SwiftReactorChartComponent;
  let fixture: ComponentFixture<SwiftReactorChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftReactorChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftReactorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
