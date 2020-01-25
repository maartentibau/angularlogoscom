import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DataService } from '../shared/data.service';
import { LogoMetadataEntities } from '../shared/logo-metadata';
import { LogoEntry } from '../shared/logo-entry';

@Component({
  selector: 'app-metacheck',
  templateUrl: './metacheck.component.html',
  styleUrls: ['./metacheck.component.scss']
})
export class MetacheckComponent {
  readonly logosWithoutMetadata$: Observable<{ count: number; logos: LogoMetadataEntities }>;

  constructor(private dataService: DataService) {
    this.logosWithoutMetadata$ = this.dataService.getLogosWithoutMetadata().pipe(
      map((logos: LogoEntry[]) => ({
        count: logos.length,
        logos: logos.reduce(
          (acc: LogoMetadataEntities, logo: LogoEntry) => ({
            ...acc,
            [logo.filename]: { name: logo.filename, creator: '', description: '', website: '', license: '' }
          }),
          {}
        )
      }))
    );
  }
}
