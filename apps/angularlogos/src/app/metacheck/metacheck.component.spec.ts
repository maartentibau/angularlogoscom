import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetacheckComponent } from './metacheck.component';

describe('MetacheckComponent', () => {
  let component: MetacheckComponent;
  let fixture: ComponentFixture<MetacheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetacheckComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetacheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
