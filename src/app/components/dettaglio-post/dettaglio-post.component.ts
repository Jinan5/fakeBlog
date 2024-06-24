import { Component, Input } from '@angular/core';
import { PostsItem } from '../../../model/postModel';
import { ServizioService } from '../../services/servizio.service';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrl: './dettaglio-post.component.css',
})
export class DettaglioPostComponent {
  @Input()
  post?: PostsItem;
  constructor(public s: ServizioService) {}
}
