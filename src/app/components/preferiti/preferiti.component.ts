import { Component } from '@angular/core';
import { ServizioService } from '../../services/servizio.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css',
})
export class PreferitiComponent {
  constructor(public s: ServizioService) {}
}
