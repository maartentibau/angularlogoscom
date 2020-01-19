import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosListComponent } from './logos-list.component';

describe('LogosListComponent', () => {
  let component: LogosListComponent;
  let fixture: ComponentFixture<LogosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogosListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
