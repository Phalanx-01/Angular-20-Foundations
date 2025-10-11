import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalUsersComponent } from './signal-users-component';

describe('SignalUsersComponent', () => {
  let component: SignalUsersComponent;
  let fixture: ComponentFixture<SignalUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
