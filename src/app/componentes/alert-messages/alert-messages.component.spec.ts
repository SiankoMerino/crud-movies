import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMessagesComponents } from './alert-messages.component';

describe('AlertMessagesComponents', () => {
  let component: AlertMessagesComponents;
  let fixture: ComponentFixture<AlertMessagesComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertMessagesComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertMessagesComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
