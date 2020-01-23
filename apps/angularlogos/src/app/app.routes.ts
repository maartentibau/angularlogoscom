import { Routes } from '@angular/router';
import { LogosListComponent } from './logos-list/logos-list.component';
import { MetacheckComponent } from './metacheck/metacheck.component';

export const appRoutes: Routes = [
  { path: '', component: LogosListComponent },
  { path: 'metacheck', component: MetacheckComponent },
  { path: '**', redirectTo: '/' }
];
