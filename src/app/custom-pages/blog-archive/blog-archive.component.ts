import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';
import { PageHeadService } from '../../services/page-head.service';
import { delay, skip, take, tap } from 'rxjs/operators';
import { interval, zip } from 'rxjs';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
})
export class BlogArchiveComponent implements OnInit {
  posts: Post[] = [];
  totalPosts: number;
  numPostsToLoad = 5;

  constructor(private postService: PostService, private pageHeadService: PageHeadService) { }

  ngOnInit() {
    this.postService.getLatestPosts()
      .pipe(
        take(this.numPostsToLoad),
      )
      .subscribe(post => this.posts.push(post));

    this.postService.getTotalNumberOfPosts().subscribe(n => this.totalPosts = n);

    this.pageHeadService.setTitle('Blog');
  }

  loadMore() {
    this.postService.getLatestPosts()
      .pipe(
        skip(this.posts.length),
        take(this.numPostsToLoad)
      )
      .subscribe(post => this.posts.push(post));
  }

  get hasMorePosts(): boolean {
    return this.posts.length < this.totalPosts;
  }

}
