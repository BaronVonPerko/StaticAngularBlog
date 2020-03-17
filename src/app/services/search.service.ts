import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import Post from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private postService: PostService) { }

  search(searchString: string) {
    const posts = this.postService.getLatestPosts();
    const results: Post[] = [];

    posts.forEach(post => {
      if (post.tags.indexOf(searchString) > -1 || post.title.indexOf(searchString) > -1) {
        results.push(post);
      }
    });

    return results;
  }
}
