import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaReactorComponent } from './lambda-reactor.component';

describe('LambdaReactorComponent', () => {
  let component: LambdaReactorComponent;
  let fixture: ComponentFixture<LambdaReactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LambdaReactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaReactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
