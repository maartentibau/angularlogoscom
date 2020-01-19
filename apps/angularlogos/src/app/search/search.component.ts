import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  searchControl = new FormControl('');
  @Output() searchTermEmit = this.searchControl.valueChanges;

  clear() {
    this.searchControl.setValue('');
  }
}
