import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { EMPTY } from 'rxjs';

import { LogosListComponent } from './logos-list.component';
import { DataService } from '../shared/data.service';

class DataServiceMock {
  getLogosFiltered = () => EMPTY;
}

@Component({
  selector: 'app-search',
  template: `
    <div>{{ searchTerm | json }}</div>
  `
})
class SearchComponentMock {
  @Input() searchTerm: string;

  @Output() searchTermEmit: EventEmitter<string>;
}

describe('LogosListComponent', () => {
  let component: LogosListComponent;
  let fixture: ComponentFixture<LogosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, MatIconModule],
      declarations: [LogosListComponent, SearchComponentMock],
      providers: [{ provide: DataService, useClass: DataServiceMock }]
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
