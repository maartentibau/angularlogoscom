import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, Observable, Subject } from 'rxjs';
import { debounceTime, first, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';

import { DataService } from '../shared/data.service';
import { LogoEntry } from '../shared/logo-entry';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SearchComponent } from '../search/search.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logos-list',
  standalone: true,
  imports: [SearchComponent, AsyncPipe, NgIf, NgFor, MatCardModule, MatButtonModule],
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogosListComponent {
  readonly logos$: Observable<LogoEntry[]>;
  readonly searchTerm$: Subject<string | null>;
  readonly firstSearchTerm$: Observable<string | null>;

  randomSeed: string = `?v=${Math.floor(Math.random() * 10)}`;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private faIconLibrary: FaIconLibrary
  ) {
    this.searchTerm$ = new Subject<string | null>();

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

    this.faIconLibrary.addIcons(faGithub, faGlobe, faCode);
  }

  searchTermChangeHandler(searchTerm: string | null) {
    this.searchTerm$.next(searchTerm);
  }

  private setSearchQueryParam(searchTerm: string | null) {
    const queryParams = searchTerm ? { q: searchTerm } : {};
    this.router.navigate([], { queryParams });
  }
}
