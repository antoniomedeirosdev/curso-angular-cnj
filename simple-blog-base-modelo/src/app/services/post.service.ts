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

  updatePost(post: Post): Promise<void> {
    return this.httpClient
    .put(`http://localhost:3000/posts/${post.id}`, post)
    .toPromise()
    .then((response) => {return response})
    .catch((error) => {return error});
  }

  deletePost(id: string): Promise<void> {
    return this.httpClient
    .delete(`http://localhost:3000/posts/${id}`)
    .toPromise()
    .then((response) => {return response})
    .catch((error) => {return error});
  }

  findPostById(id: string): Promise<Post> {
    return this.httpClient
    .get<Post>(`http://localhost:3000/posts/${id}`)
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
