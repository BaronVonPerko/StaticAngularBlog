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
}
