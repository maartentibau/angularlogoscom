import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { LogosComponent } from './logos.component';

@Component({
  selector: 'app-logos-list',
  template: ``
})
class LogosListComponentMock {}

describe('LogosComponent', () => {
  let component: LogosComponent;
  let fixture: ComponentFixture<LogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogosComponent, LogosListComponentMock]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
