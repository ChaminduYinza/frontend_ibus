import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScehduleComponent } from './scehdule.component';

describe('ScehduleComponent', () => {
  let component: ScehduleComponent;
  let fixture: ComponentFixture<ScehduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScehduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScehduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
