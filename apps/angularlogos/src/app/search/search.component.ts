import { Component, Output, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnChanges {
  searchControl = new FormControl('');
  @Input() searchTerm: string;
  @Output() searchTermEmit = this.searchControl.valueChanges;

  ngOnChanges() {
    this.searchControl.setValue(this.searchTerm, { emitEvent: false });
  }

  clear() {
    this.searchControl.setValue('');
  }
}
