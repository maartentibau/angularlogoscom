import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';

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

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.logos$ = this.searchTerm$.pipe(
      debounceTime(200),
      startWith(''),
      switchMap((term) => this.ds.getLogosFiltered(term))
    );
  }
}
