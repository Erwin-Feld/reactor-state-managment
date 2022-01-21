import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftReactorComponent } from './swift-reactor.component';

describe('SwiftReactorComponent', () => {
  let component: SwiftReactorComponent;
  let fixture: ComponentFixture<SwiftReactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftReactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftReactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
