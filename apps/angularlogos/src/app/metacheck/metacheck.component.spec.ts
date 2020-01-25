import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';

import { MetacheckComponent } from './metacheck.component';
import { DataService } from '../shared/data.service';

class DataServiceMock {
  getLogosWithoutMetadata = () => EMPTY;
}

describe('MetacheckComponent', () => {
  let component: MetacheckComponent;
  let fixture: ComponentFixture<MetacheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetacheckComponent],
      providers: [{ provide: DataService, useClass: DataServiceMock }]
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
