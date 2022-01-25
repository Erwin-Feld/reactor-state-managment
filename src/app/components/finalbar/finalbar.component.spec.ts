import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalbarComponent } from './finalbar.component';

describe('FinalbarComponent', () => {
  let component: FinalbarComponent;
  let fixture: ComponentFixture<FinalbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
