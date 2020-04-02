import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import Post from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private postService: PostService) { }

  search(searchString: string): Observable<Post[]> {
    return this.postService.getLatestPosts().pipe(
      map(posts => {
        return posts.filter(post => {
          return post.tags.toLowerCase().indexOf(searchString.toLowerCase()) > -1
            || post.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        });
      }
    ));
  }
}
