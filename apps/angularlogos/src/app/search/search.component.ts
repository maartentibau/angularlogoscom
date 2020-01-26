import { ChangeDetectionStrategy, Component, Input, OnChanges, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnChanges {
  searchControl: FormControl = new FormControl('');

  @Input() searchTerm: string;
  @Output() searchTermChange: Observable<string> = this.searchControl.valueChanges;

  ngOnChanges() {
    this.searchControl.setValue(this.searchTerm, { emitEvent: false });
  }

  clear() {
    this.searchControl.setValue('');
  }
}
