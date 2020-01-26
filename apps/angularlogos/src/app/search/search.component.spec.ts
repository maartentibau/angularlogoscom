import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
      declarations: [SearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('ngOnChanges', () => {
    it('should set a new value', () => {
      // prepare
      component.searchTerm = 'search-for';
      jest.spyOn(component.searchControl, 'setValue');

      // act
      component.ngOnChanges();

      // check
      expect(component.searchControl.setValue).toHaveBeenCalledWith(component.searchTerm, { emitEvent: false });
    });
  });

  describe('clear', () => {
    it('should clear the searchTerm', () => {
      // prepare
      component.searchControl.setValue('some-value');
      jest.spyOn(component.searchControl, 'setValue');

      // act
      component.clear();

      // check
      expect(component.searchControl.setValue).toHaveBeenCalledWith('');
      expect(component.searchControl.value).toBe('');
    });

    it('should emit empty string', (done) => {
      // check
      component.searchControl.valueChanges.subscribe((value: string) => {
        expect(value).toBe('');
        done();
      });

      // act
      component.clear();
    });
  });
});
