import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LogosComponent } from './logos.component';

describe('LogosComponent', () => {
  let component: LogosComponent;
  let fixture: ComponentFixture<LogosComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [LogosComponent],
      providers: [provideRouter([])],
    }).overrideComponent(LogosComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
