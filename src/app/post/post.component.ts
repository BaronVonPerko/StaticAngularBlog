import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import Post from '../models/post';
import { PageHeadService } from '../services/page-head.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;
  postUrl: string;

  constructor(private route: ActivatedRoute, private postService: PostService, private pageHeadService: PageHeadService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post$ = this.postService.getPostDetails(params.title).pipe(
        tap(post => {
          this.postUrl = `/_assets/posts/${post.link}.md`;
          this.pageHeadService.setTitle(post.title);
          this.pageHeadService.setOpenGraphTags(post.title, post.image, `/blog/post/${post.link}`);
          this.pageHeadService.setTwitterCardData(post.title, post.image);
        })
      );
    });
  }

}
