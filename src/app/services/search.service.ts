import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import Post from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private postService: PostService) { }

  search(searchString: string) {
    let posts: Post[];
    const results: Post[] = [];

    this.postService.getLatestPosts().subscribe(latestPosts => posts = latestPosts);

    posts.forEach(post => {
      if (post.tags.toLowerCase().indexOf(searchString.toLowerCase()) > -1 
      || post.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
        results.push(post);
      }
    });

    return results;

  }
}
