import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EMPTY, Observable } from 'rxjs';

import { LogosListComponent } from './logos-list.component';
import { DataService } from '../shared/data.service';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-search',
  template: `
    <div>{{ searchTerm | json }}</div>
  `,
  standalone: true
})
class MockSearchComponent {
  @Input() searchTerm!: string;
  @Output() searchTermChange: Observable<string> = EMPTY;
}

describe('LogosListComponent', () => {
  let component: LogosListComponent;
  let fixture: ComponentFixture<LogosListComponent>;

  const dataServiceMock = {
    getLogosFiltered: () => EMPTY
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, MatIconModule, LogosListComponent, MockSearchComponent],
      providers: [
        { provide: DataService, useValue: dataServiceMock },
        provideNoopAnimations()
      ]
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
