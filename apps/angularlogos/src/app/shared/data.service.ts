import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { LogoEntry } from './logo-entry';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getLogos() {
    return this.http.get<any[]>(`${environment.apiBaseUrl}/contents/logos`).pipe(
      map((contents) => contents.map((content) => this.contentToLogoEntry(content))),
      shareReplay()
    );
  }

  private contentToLogoEntry(content: any): LogoEntry {
    return {
      filename: content.name,
      name: content.name.split('.').slice(0, 1),
      imageUrl: environment.ghpagesBaseUrl + '/logos/' + content.name,
      rawUrl: content.download_url,
      githubUrl: content.html_url
    };
  }
}
