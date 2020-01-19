import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs';
import { LogoEntry } from '../shared/logo-entry';

@Component({
  selector: 'app-logos-list',
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss']
})
export class LogosListComponent implements OnInit {
  logos$: Observable<LogoEntry[]>;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.logos$ = this.ds.getLogos();
  }
}
