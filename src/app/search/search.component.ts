import { ChangeDetectionStrategy, Component, input, OnChanges } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnChanges {
  readonly searchTerm = input.required<string | null>();

  searchControl = new FormControl('', { nonNullable: true });

  searchTermChange = outputFromObservable(this.searchControl.valueChanges);

  ngOnChanges() {
    this.searchControl.setValue(this.searchTerm() || '', { emitEvent: false });
  }

  clear() {
    this.searchControl.setValue('');
  }
}
