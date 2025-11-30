import { Routes } from '@angular/router';

import { LogosComponent } from './logos/logos.component';

export const routes: Routes = [
  { path: '', component: LogosComponent },
  {
    path: 'metacheck',
    loadComponent: () =>
      import('./metacheck/metacheck.component').then((m) => m.MetacheckComponent),
  },
  { path: '**', redirectTo: '/' },
];
