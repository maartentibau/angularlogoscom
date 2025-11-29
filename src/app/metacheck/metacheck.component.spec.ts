import { ComponentFixture, TestBed } from '@angular/core/testing';
import { asyncScheduler, scheduled } from 'rxjs';

import { MetacheckComponent } from './metacheck.component';
import { DataService } from '../shared/data.service';

describe('MetacheckComponent', () => {
  let component: MetacheckComponent;
  let fixture: ComponentFixture<MetacheckComponent>;

  beforeEach(async () => {
    const dataServiceMock = {
      getLogosWithoutMetadata: () => scheduled([[]], asyncScheduler),
    };

    TestBed.configureTestingModule({
      imports: [MetacheckComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetacheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
