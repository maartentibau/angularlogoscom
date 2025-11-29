import { JsonPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Component, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EMPTY, Observable } from 'rxjs';

import { LogosListComponent } from './logos-list.component';
import { DataService } from '../shared/data.service';

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
