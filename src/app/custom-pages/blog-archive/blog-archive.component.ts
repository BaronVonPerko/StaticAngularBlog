import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html'
})
export class BlogArchiveComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.getLatestPosts();
  }

}
