import { Injectable } from '@angular/core';
import { POSTCATEGORIES, POSTS } from '../../data/postData';
import { PostCategoriesItem, PostsItem } from '../../model/postModel';

@Injectable({
  providedIn: 'root',
})
export class ServizioService {
  postPreferiti: PostsItem[] = [];
  post: PostsItem[] = [];
  onSearch: boolean = false;
  constructor() {}

  getPost() {
    return POSTS as PostsItem[];
  }
  getCategories() {
    return POSTCATEGORIES as PostCategoriesItem[];
  }
  addFav(post: PostsItem) {
    //verifica prima dell'aggiunta
    if (!this.postPreferiti.find((p) => p.id == post.id)) {
      this.postPreferiti.push(post);
    }
  }
  removeFav(post: PostsItem) {
    let i = this.postPreferiti.indexOf(post);
    this.postPreferiti.splice(i, 1);
  }
  searchFor(categoria: string) {
    let postFiltrati = POSTS.filter((p) => p.category == categoria);
    this.onSearch = true;
    if (categoria == 'tutti') {
      postFiltrati = POSTS;
      this.onSearch = false;
    }
    return (this.post = postFiltrati);
  }
}

//DISPERATI TENTATIVI fatti prima di decidere di lavorare direttamente
//con due distinti array di oggetti anzichè un oggetto con due proprietà a loro volta array di oggetti

// let postData = POSTS as PostObject;
// let postItem = postData.posts;
// return postItem;
// let data = POSTS as PostObject;
// let dataValues = Object.values(data);
// let dataPost = dataValues[0];
// return dataPost;
//forse un for-in?
