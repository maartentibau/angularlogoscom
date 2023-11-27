import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { DataService } from '../shared/data.service';
import { LogoMetadataEntities } from '../shared/logo-metadata';
import { LogoEntry } from '../shared/logo-entry';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-metacheck',
  standalone: true,
  imports: [NgIf, JsonPipe, AsyncPipe],
  templateUrl: './metacheck.component.html',
  styleUrls: ['./metacheck.component.scss']
})
export class MetacheckComponent {
  readonly logosWithoutMetadata$ = inject(DataService).getLogosWithoutMetadata().pipe(
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
