import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, SearchComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should set a new value', () => {
      // prepare
      fixture.componentRef.setInput('searchTerm', 'search-for');
      vi.spyOn(component.searchControl, 'setValue');

      // act
      component.ngOnChanges();

      // check
      expect(component.searchControl.setValue).toHaveBeenCalledWith(component.searchTerm(), {
        emitEvent: false,
      });
    });
  });

  describe('clear', () => {
    it('should clear the searchTerm', () => {
      // prepare
      component.searchControl.setValue('some-value');
      vi.spyOn(component.searchControl, 'setValue');

      // act
      component.clear();

      // check
      expect(component.searchControl.setValue).toHaveBeenCalledWith('');
      expect(component.searchControl.value).toBe('');
    });

    it('should emit empty string', () =>
      new Promise<void>((done) => {
        // check
        component.searchControl.valueChanges.subscribe((value: string) => {
          expect(value).toBe('');
          done();
        });

        // act
        component.clear();
      }));
  });
});
