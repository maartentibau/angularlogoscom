import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule } from '@angular/material';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LogosListComponent } from './logos-list/logos-list.component';
import { SearchComponent } from './search/search.component';
import { MetacheckComponent } from './metacheck/metacheck.component';
import { LogosComponent } from './logos/logos.component';

@NgModule({
  declarations: [AppComponent, LogosListComponent, SearchComponent, MetacheckComponent, LogosComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
