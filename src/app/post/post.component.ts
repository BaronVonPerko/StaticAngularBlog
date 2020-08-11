import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import Post from '../models/post';
import {Title} from "@angular/platform-browser";
import {PageHeadService} from "../services/page-head.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  post: Post;
  postUrl: string;

  constructor(private route: ActivatedRoute, private postService: PostService, private pageHeadService: PageHeadService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postService.getPostDetails(params.title)
        .subscribe(post => this.post = post);

      this.postUrl = `/_assets/posts/${this.post.link}.md`;
      this.pageHeadService.setTitle(this.post.title);
    });
  }

}
