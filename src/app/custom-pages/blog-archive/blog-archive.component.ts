import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';
import { PageHeadService } from '../../services/page-head.service';
import { map, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostBoxComponent } from '../../components/post-box/post-box.component';

@Component({
  selector: 'app-blog-archive',
  standalone: true,
  imports: [CommonModule, PostBoxComponent],
  template: `
    <ng-container *ngIf="posts$ | async; let posts">
      <h1 class="text-indigo-600">Latest Posts</h1>

      <app-post-box *ngFor="let post of posts" [post]="post"></app-post-box>

      <span *ngIf="hasMore$ | async" class="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          (click)="loadMore()"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          Load More
        </button>
      </span>
    </ng-container>
  `,
})
export class BlogArchiveComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;
  hasMore$ = new BehaviorSubject(true);
  numPostsToLoad$ = new BehaviorSubject(5);
  numPostsDisplayed: number;
  totalPosts: number;
  onDestroy$ = new Subject();

  constructor(
    private postService: PostService,
    private pageHeadService: PageHeadService
  ) {}

  ngOnInit() {
    this.numPostsToLoad$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((numPostsToLoad) => {
        this.posts$ = this.postService.getLatestPosts().pipe(
          tap((posts) => {
            this.totalPosts = posts.length;
            if (numPostsToLoad < this.totalPosts) {
              this.hasMore$.next(true);
            } else {
              this.hasMore$.next(false);
            }
          }),
          map((posts) => posts.slice(0, numPostsToLoad)),
          tap((_) => (this.numPostsDisplayed = numPostsToLoad))
        );
      });

    this.pageHeadService.setTitle('Blog');
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
  }

  loadMore() {
    this.numPostsToLoad$.next(this.numPostsDisplayed + 5);
  }
}
