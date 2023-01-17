import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, shareReplay, withLatestFrom } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { LogoEntry } from './logo-entry';
import { LogoMetadataEntities, LogoMetadataFileSchema } from './logo-metadata';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private logos$!: Observable<LogoEntry[]>;

  constructor(private http: HttpClient) {}

  getLogos(): Observable<LogoEntry[]> {
    if (!this.logos$) {
      this.logos$ = forkJoin([this.http.get<any[]>(`${environment.apiBaseUrl}/contents/logos`), this.getMetadataCached()]).pipe(
        map(([contents, metadataAll]) => contents.map((content) => this.mapGitHubContentToLogoEntry(content, metadataAll))),
        shareReplay()
      );
    }

    return this.logos$;
  }

  getLogosWithoutMetadata(): Observable<LogoEntry[]> {
    return this.getLogos().pipe(
      withLatestFrom(this.getMetadataCached()),
      map(([logos, metadata]) => logos.filter((logo) => !metadata[logo.filename]))
    );
  }

  getLogosFiltered(searchTerm: string | null): Observable<LogoEntry[]> {
    const lowerCaseTerm = searchTerm?.toLowerCase() ?? '';
    return this.getLogos().pipe(
      map((logos) => (searchTerm ? logos.filter((logo) => logo.name.toLowerCase().includes(lowerCaseTerm)) : logos))
    );
  }

  private mapGitHubContentToLogoEntry(content: any, metadataAll: LogoMetadataEntities): LogoEntry {
    const filename = content.name;
    const metadata = metadataAll[filename] || {};

    const contentData = {
      filename,
      name: filename.split('.').slice(0, 1).join(''),
      imageUrl: `${environment.ghpagesBaseUrl}/logos/${filename}`,
      rawUrl: content.download_url,
      githubUrl: content.html_url
    };

    return {
      ...contentData,
      ...metadata
    };
  }

  private getMetadataCached(): Observable<LogoMetadataEntities> {
    return this.http.get<LogoMetadataFileSchema>(environment.metadataUrl).pipe(pluck('logos'), shareReplay());
  }
}
