import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html'
})
export class BlogArchiveComponent implements OnInit {

  posts$: Observable<Post[]>;
  page = 0;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = Number(params.page || 0);
      this.posts$ = this.postService.getLatestPosts(this.page);
    });
  }

}
