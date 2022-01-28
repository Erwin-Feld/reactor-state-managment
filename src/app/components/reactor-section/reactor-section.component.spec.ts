import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorSectionComponent } from './reactor-section.component';

describe('ReactorSectionComponent', () => {
  let component: ReactorSectionComponent;
  let fixture: ComponentFixture<ReactorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactorSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
