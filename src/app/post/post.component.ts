import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import Post from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  post: Post;
  postUrl: string;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = this.postService.getPostDetails(params.title);
      this.postUrl = `/_assets/posts/${this.post.link}.md`;
    });
  }

}
