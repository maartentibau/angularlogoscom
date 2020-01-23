import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, concat } from 'rxjs';
import { debounceTime, startWith, switchMap, map, first, takeUntil, tap } from 'rxjs/operators';

import { DataService } from '../shared/data.service';
import { LogoEntry } from '../shared/logo-entry';

@Component({
  selector: 'app-logos-list',
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss']
})
export class LogosListComponent implements OnInit {
  logos$: Observable<LogoEntry[]>;
  searchTerm$ = new Subject<string>();
  firstSearchTerm$: Observable<string>;

  randomSeed = '?v=' + Math.floor(Math.random() * 10);

  constructor(private ds: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.firstSearchTerm$ = this.route.queryParamMap.pipe(
      map((params) => params.get('q')),
      first((term) => !!term),
      takeUntil(this.searchTerm$)
    );

    this.logos$ = concat(this.firstSearchTerm$, this.searchTerm$).pipe(
      debounceTime(200),
      tap((term) => this.setSearchQueryParam(term)),
      startWith(''),
      switchMap((term) => this.ds.getLogosFiltered(term))
    );
  }

  private setSearchQueryParam(searchTerm: string) {
    const queryParams = searchTerm ? { q: searchTerm } : {};
    this.router.navigate([], { queryParams });
  }
}
