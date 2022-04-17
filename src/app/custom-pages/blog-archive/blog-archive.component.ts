import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';
import { PageHeadService } from '../../services/page-head.service';
import { delay, map, mergeMap, skip, take, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, interval, Observable, Subject, zip } from 'rxjs';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
})
export class BlogArchiveComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;
  hasMore$ = new BehaviorSubject(true);
  numPostsToLoad$ = new BehaviorSubject(5);
  numPostsDisplayed: number;
  totalPosts: number;
  onDestroy$ = new Subject();

  constructor(private postService: PostService, private pageHeadService: PageHeadService) {
  }

  ngOnInit() {
    this.numPostsToLoad$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      numPostsToLoad => {
        this.posts$ = this.postService.getLatestPosts()
          .pipe(
            tap(posts => {
              this.totalPosts = posts.length;
              console.log('total posts', this.totalPosts);
              console.log('posts to load', numPostsToLoad);
              if (numPostsToLoad < this.totalPosts) {
                this.hasMore$.next(true);
              } else {
                this.hasMore$.next(false);
              }
            }),
            map(posts => posts.slice(0, numPostsToLoad)),
            tap(_ => this.numPostsDisplayed = numPostsToLoad)
          );
      }
    );

    this.pageHeadService.setTitle('Blog');
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
  }

  loadMore() {
    this.numPostsToLoad$.next(this.numPostsDisplayed + 5);
  }


}
