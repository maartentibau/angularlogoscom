import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-metacheck',
  templateUrl: './metacheck.component.html',
  styleUrls: ['./metacheck.component.scss']
})
export class MetacheckComponent implements OnInit {
  logosWithoutMetadata$ = this.ds.getLogosWithoutMetadata().pipe(
    map((logos) =>
      logos.map((logo) => ({
        metadataObject: { [logo.filename]: { name: logo.name, creator: '', description: '', website: '', license: '' } },
        filename: logo.filename
      }))
    ),
    shareReplay()
  );

  fullLogoMetadata$ = this.logosWithoutMetadata$.pipe(
    map((logos) => logos.reduce((acc, item) => ({ ...acc, ...item.metadataObject }), {}))
  );

  constructor(private ds: DataService) {}

  ngOnInit() {}
}
