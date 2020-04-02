import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html'
})
export class BlogArchiveComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getLatestPosts().subscribe(posts => this.posts = posts);
  }

}
