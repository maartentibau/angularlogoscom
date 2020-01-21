import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { LogoEntry } from './logo-entry';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private logos$: Observable<LogoEntry[]>;

  constructor(private http: HttpClient) {}

  getLogos() {
    if (!this.logos$) {
      this.logos$ = this.http.get<any[]>(`${environment.apiBaseUrl}/contents/logos`).pipe(
        map((contents) => contents.map((content) => this.contentToLogoEntry(content))),
        shareReplay()
      );
    }

    return this.logos$;
  }

  getLogosFiltered(searchTerm: string) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return this.getLogos().pipe(
      map((logos) => (searchTerm ? logos.filter((logo) => logo.name.toLowerCase().includes(lowerCaseTerm)) : logos))
    );
  }

  private contentToLogoEntry(content: any): LogoEntry {
    return {
      filename: content.name,
      name: content.name
        .split('.')
        .slice(0, 1)
        .join(''),
      imageUrl: environment.ghpagesBaseUrl + '/logos/' + content.name,
      rawUrl: content.download_url,
      githubUrl: content.html_url
    };
  }
}
