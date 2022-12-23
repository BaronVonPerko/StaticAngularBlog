import { Injectable } from '@angular/core';
import { default as Posts } from '../../_assets/posts/posts.json';
import Post from '../models/post.js';
import { mergeMap, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
  getPostDetails(title: string): Observable<Post> {
    return of(Posts.Posts.filter(post => post.link === title)[0] as Post);
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
}
