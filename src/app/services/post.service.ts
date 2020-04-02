import { Injectable } from '@angular/core';
import { Posts } from '../../_assets/posts/posts.json';
import Post from '../models/post.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getLatestPosts(): Observable<Post[]> {
    return new Observable(subscriber => {

      const posts = Posts.sort((a: Post, b: Post) => {
        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();
        return bTime - aTime;
      });

      subscriber.next(posts);
    });
  }

  getPostsForTag(tag: string): Observable<Post[]> {
    return this.getLatestPosts().pipe(
      map(posts => posts.filter(post => post.tags.indexOf(tag) > -1))
    );
  }

  getPostDetails(link: string): Observable<Post> {
    return new Observable(subscriber => {
      subscriber.next(Posts.filter(post => post.link === link)[0])
    });
  }
}
