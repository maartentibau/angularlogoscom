import { ChangeDetectionStrategy, Component, Input, OnChanges, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-search',
    imports: [MatInputModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnChanges {
  searchControl = new FormControl('', { nonNullable: true });

  @Input() searchTerm!: string | null;
  @Output() searchTermChange: Observable<string> = this.searchControl.valueChanges;

  ngOnChanges() {
    this.searchControl.setValue(this.searchTerm || '', { emitEvent: false });
  }

  clear() {
    this.searchControl.setValue('');
  }
}
