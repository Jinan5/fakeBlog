import { Component, Input, OnInit } from '@angular/core';
import { ServizioService } from '../../services/servizio.service';
import { PostsItem } from '../../../model/postModel';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrl: './lista-post.component.css',
})
export class ListaPostComponent implements OnInit {
  @Input()
  posts: PostsItem[] = [];

  constructor(public s: ServizioService) {}
  ngOnInit(): void {
    this.posts = this.s.getPost();
  }
}
