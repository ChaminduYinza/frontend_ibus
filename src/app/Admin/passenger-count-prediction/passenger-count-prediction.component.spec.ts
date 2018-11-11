import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCountPredictionComponent } from './passenger-count-prediction.component';

describe('PassengerCountPredictionComponent', () => {
  let component: PassengerCountPredictionComponent;
  let fixture: ComponentFixture<PassengerCountPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerCountPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerCountPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
