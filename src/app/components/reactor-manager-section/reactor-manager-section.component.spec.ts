import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorManagerSectionComponent } from './reactor-manager-section.component';

describe('ReactorManagerSectionComponent', () => {
  let component: ReactorManagerSectionComponent;
  let fixture: ComponentFixture<ReactorManagerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactorManagerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactorManagerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
