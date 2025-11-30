import { JsonPipe } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { provideRouter } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

import { DataService } from '../shared/data.service';
import { LogosListComponent } from './logos-list.component';

@Component({
  selector: 'app-search',
  template: ` <div>{{ searchTerm | json }}</div> `,
  imports: [JsonPipe],
})
class MockSearchComponent {
  @Input() searchTerm!: string;
  @Output() searchTermChange: Observable<string> = EMPTY;
}

describe('LogosListComponent', () => {
  let component: LogosListComponent;
  let fixture: ComponentFixture<LogosListComponent>;

  const dataServiceMock = {
    getLogosFiltered: () => EMPTY,
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, LogosListComponent, MockSearchComponent],
      providers: [provideRouter([]), { provide: DataService, useValue: dataServiceMock }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
