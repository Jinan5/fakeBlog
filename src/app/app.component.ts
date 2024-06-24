import { Component } from '@angular/core';
import { ServizioService } from './services/servizio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fakeBlog';
  constructor(public s: ServizioService) {}
}
