import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, Observable, Subject } from 'rxjs';
import { debounceTime, first, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';

import { DataService } from '../shared/data.service';
import { LogoEntry } from '../shared/logo-entry';

@Component({
  selector: 'app-logos-list',
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogosListComponent {
  readonly logos$: Observable<LogoEntry[]>;
  readonly searchTerm$: Subject<string>;
  readonly firstSearchTerm$: Observable<string>;

  randomSeed: string = `?v=${Math.floor(Math.random() * 10)}`;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.searchTerm$ = new Subject<string>();

    this.firstSearchTerm$ = this.route.queryParamMap.pipe(
      map((params) => params.get('q')),
      first((term) => !!term),
      takeUntil(this.searchTerm$)
    );

    this.logos$ = concat(this.firstSearchTerm$, this.searchTerm$).pipe(
      debounceTime(200),
      tap((term) => this.setSearchQueryParam(term)),
      startWith(''),
      switchMap((term) => this.dataService.getLogosFiltered(term))
    );
  }

  searchTermChangeHandler(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }

  private setSearchQueryParam(searchTerm: string) {
    const queryParams = searchTerm ? { q: searchTerm } : {};
    this.router.navigate([], { queryParams });
  }
}
