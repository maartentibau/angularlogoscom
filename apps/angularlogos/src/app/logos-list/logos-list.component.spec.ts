import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EMPTY, Observable, of } from 'rxjs';

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
class MockSearchComponent {
  @Input() searchTerm!: string;
  @Output() searchTermChange: Observable<string> = EMPTY;
}

describe('LogosListComponent', () => {
  let component: LogosListComponent;
  let fixture: ComponentFixture<LogosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, MatIconModule],
      declarations: [LogosListComponent, MockSearchComponent],
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
