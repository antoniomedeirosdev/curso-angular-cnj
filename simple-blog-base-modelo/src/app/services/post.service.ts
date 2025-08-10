import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient){}

  createPost(post: Post): Promise<void> {
    return this.httpClient
    .post('http://localhost:3000/posts', post)
    .toPromise()
    .then((response) => {return response})
    .catch((error) => {return error});
  }

  findAll(): Promise<Post[]> {
    return this.httpClient
      .get<Post[]>('http://localhost:3000/posts')
      .toPromise()
      .then((response) => {return response})
      .catch((error) => {return error});
  }
}
