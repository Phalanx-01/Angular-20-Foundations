import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenTimerComponent } from './even-timer-component';

describe('EvenTimerComponent', () => {
  let component: EvenTimerComponent;
  let fixture: ComponentFixture<EvenTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
