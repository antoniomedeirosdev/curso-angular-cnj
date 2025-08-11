import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:3000/posts';
  
  constructor(private httpClient: HttpClient){}

  createPost(post: Post): Observable<void> {
    return this.httpClient.post<void>(this.baseUrl, post);
  }

  updatePost(post: Post): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${post.id}`, post);
  }

  deletePost(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  findPostById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.baseUrl}/${id}`);
  }

  findAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl);
  }
}
