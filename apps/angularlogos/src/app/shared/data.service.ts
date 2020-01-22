import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, pluck, withLatestFrom } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

import { environment } from '../../environments/environment';
import { LogoEntry } from './logo-entry';
import { LogoMetadataAll, LogoMetadataFileSchema } from './logo-metadata';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private logos$: Observable<LogoEntry[]>;

  constructor(private http: HttpClient) {}

  getLogos() {
    if (!this.logos$) {
      this.logos$ = forkJoin([this.http.get<any[]>(`${environment.apiBaseUrl}/contents/logos`), this.getMetadataCached()]).pipe(
        map(([contents, metadataAll]) => contents.map((content) => this.contentToLogoEntry(content, metadataAll))),
        shareReplay()
      );
    }

    return this.logos$;
  }

  getLogosWithoutMetadata() {
    return this.getLogos().pipe(
      withLatestFrom(this.getMetadataCached()),
      map(([logos, metadata]) => logos.filter((logo) => !metadata[logo.filename]))
    );
  }

  getLogosFiltered(searchTerm: string) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return this.getLogos().pipe(
      map((logos) => (searchTerm ? logos.filter((logo) => logo.name.toLowerCase().includes(lowerCaseTerm)) : logos))
    );
  }

  private contentToLogoEntry(content: any, metadataAll: LogoMetadataAll): LogoEntry {
    const filename = content.name;
    const metadata = metadataAll[filename] || {};

    return {
      filename,
      name: filename
        .split('.')
        .slice(0, 1)
        .join(''),
      imageUrl: `${environment.ghpagesBaseUrl}/logos/${filename}`,
      rawUrl: content.download_url,
      githubUrl: content.html_url,
      ...metadata
    };
  }

  private getMetadataCached() {
    return this.http.get<LogoMetadataFileSchema>(environment.metadataUrl).pipe(pluck('logos'), shareReplay());
  }
}
