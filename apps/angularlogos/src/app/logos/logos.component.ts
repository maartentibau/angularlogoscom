import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LogosListComponent } from '../logos-list/logos-list.component';

@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [RouterLink, MatButtonModule, LogosListComponent],
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent {}
