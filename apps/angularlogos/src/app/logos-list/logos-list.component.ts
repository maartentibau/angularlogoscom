import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, Subject } from 'rxjs';
import { debounceTime, first, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';

import { DataService } from '../shared/data.service';
import { SearchComponent } from '../search/search.component';
import { AsyncPipe, I18nPluralPipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logos-list',
  standalone: true,
  imports: [SearchComponent, AsyncPipe, NgIf, NgFor, MatCardModule, MatButtonModule, I18nPluralPipe],
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogosListComponent {

  private dataService = inject(DataService);
  private router = inject(Router);

  readonly searchTerm$ = new Subject<string | null>();
  readonly firstSearchTerm$ = inject(ActivatedRoute).queryParamMap.pipe(
    map((params) => params.get('q')),
    first((term) => !!term),
    takeUntil(this.searchTerm$)
  );

  readonly finalSearchTerm$ = concat(this.firstSearchTerm$, this.searchTerm$).pipe(shareReplay(1));

  readonly logos$ = this.finalSearchTerm$.pipe(
    debounceTime(300),
    tap((term) => this.setSearchQueryParam(term)),
    startWith(''),
    switchMap((term) => this.dataService.getLogosFiltered(term)),
    shareReplay(1)
  );

  readonly logoCount$ = this.logos$.pipe(
    map((logos) => logos.length)
  );

  randomSeed: string = `?v=${Math.floor(Math.random() * 10)}`;

  searchTermChangeHandler(searchTerm: string | null) {
    this.searchTerm$.next(searchTerm);
  }

  private setSearchQueryParam(searchTerm: string | null) {
    const queryParams = searchTerm ? { q: searchTerm } : {};
    this.router.navigate([], { queryParams });
  }
}
