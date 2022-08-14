import { Injectable } from '@angular/core';
import { default as Posts } from '../../_assets/posts/posts.json';
import Post from '../models/post.js';
import { mergeMap, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  getLatestPosts(): Observable<Post[]> {
    const sortedPosts = Posts.Posts.sort((a: Post, b: Post) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return bTime - aTime;
    });

    return of(sortedPosts);
  }

  getPostsForTag(tag: string): Observable<Post> {
    return this.getLatestPosts().pipe(
      mergeMap(p => p),
      filter(post => post.tags?.indexOf(tag) > -1)
    );
  }

  getPostDetails(link: string): Observable<Post> {
    return new Observable(subscriber => {
      subscriber.next(Posts.Posts.filter(post => post.link === link)[0]);
    });
  }
}
