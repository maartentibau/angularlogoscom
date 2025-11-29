import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, Subject } from 'rxjs';
import {
  debounceTime,
  first,
  map,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';

import { DataService } from '../shared/data.service';
import { SearchComponent } from '../search/search.component';
import { AsyncPipe, I18nPluralPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LogoEntry } from '../shared/logo-entry';

@Component({
  selector: 'app-logos-list',
  imports: [SearchComponent, AsyncPipe, MatCardModule, MatButtonModule, I18nPluralPipe],
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogosListComponent {
  readonly #dataService = inject(DataService);
  readonly #router = inject(Router);

  readonly searchTerm$ = new Subject<string | null | undefined>();
  readonly firstSearchTerm$ = inject(ActivatedRoute).queryParamMap.pipe(
    map((params) => params.get('q')),
    first((term) => !!term),
    takeUntil(this.searchTerm$),
  );

  readonly finalSearchTerm = toSignal(
    concat(this.firstSearchTerm$, this.searchTerm$).pipe(shareReplay(1)),
  );

  readonly logos = toSignal<LogoEntry[] | undefined>(
    toObservable(this.finalSearchTerm).pipe(
      debounceTime(300),
      tap((term) => this.setSearchQueryParam(term)),
      startWith(''),
      switchMap((term) => this.#dataService.getLogosFiltered(term)),
      shareReplay(1),
    ),
    { initialValue: undefined },
  );

  readonly logoCount = computed(() => this.logos()?.length ?? 0);

  randomSeed: string = `?v=${Math.floor(Math.random() * 10)}`;

  searchTermChangeHandler(searchTerm: string | null | undefined) {
    this.searchTerm$.next(searchTerm);
  }

  private setSearchQueryParam(searchTerm: string | null | undefined) {
    const queryParams = searchTerm ? { q: searchTerm } : {};
    this.#router.navigate([], { queryParams });
  }
}
