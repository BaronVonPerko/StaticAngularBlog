import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.css']
})
export class BlogArchiveComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getLatestPosts();
  }

  getPostLink(post: Post) {
    return `/blog/post/${post.link}`;
  }

  getPostImage(post: Post) {
    return `/assets/images/${post.image}`;
  }

}
