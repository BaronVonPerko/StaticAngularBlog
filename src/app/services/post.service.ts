import { Injectable } from '@angular/core';
import { Posts } from "../../_assets/posts/posts.json";
import Post from '../models/post.js';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    return Posts;
  }

  getLatestPosts(): Post[] {
    return this.getPosts().sort((a: Post, b: Post) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return bTime - aTime;
    });
  }

  getPostsForTag(tag: string): Post[] {
    return this.getLatestPosts().filter(post => post.tags.indexOf(tag) > -1);
  }

  getPostDetails(link: string): Post {
    return this.getPosts().filter(post => post.link === link)[0];
  }
}
