import { Component, OnInit } from '@angular/core';
import { ServizioService } from '../../services/servizio.service';
import { PostCategoriesItem } from '../../../model/postModel';

@Component({
  selector: 'app-filtro-box',
  templateUrl: './filtro-box.component.html',
  styleUrl: './filtro-box.component.css',
})
export class FiltroBoxComponent implements OnInit {
  categorie: PostCategoriesItem[] = [];
  constructor(public s: ServizioService) {}
  ngOnInit(): void {
    this.categorie = this.s.getCategories();
  }
}
