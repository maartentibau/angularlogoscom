import { Routes } from '@angular/router';
import { MetacheckComponent } from './metacheck/metacheck.component';
import { LogosComponent } from './logos/logos.component';

export const appRoutes: Routes = [
  { path: '', component: LogosComponent },
  { path: 'metacheck', component: MetacheckComponent },
  { path: '**', redirectTo: '/' }
];
