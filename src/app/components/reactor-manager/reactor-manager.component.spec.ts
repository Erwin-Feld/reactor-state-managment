import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorManagerComponent } from './reactor-manager.component';

describe('ReactorManagerComponent', () => {
  let component: ReactorManagerComponent;
  let fixture: ComponentFixture<ReactorManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactorManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
