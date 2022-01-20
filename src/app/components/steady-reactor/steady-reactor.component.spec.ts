import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteadyReactorComponent } from './steady-reactor.component';

describe('SteadyReactorComponent', () => {
  let component: SteadyReactorComponent;
  let fixture: ComponentFixture<SteadyReactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteadyReactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteadyReactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
