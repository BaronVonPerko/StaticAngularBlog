import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import Post from '../models/post';
import { PageHeadService } from '../services/page-head.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TagsListComponent } from '../components/tags-list/tags-list.component';
import { MarkdownModule } from 'ngx-markdown';
import { UtterancesDirective } from '../directives/utterances.directive';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    TagsListComponent,
    MarkdownModule,
    UtterancesDirective,
  ],
  template: `
    <div class="content" *ngIf="post$ | async; let post">
      <h1 class="text-indigo-600">
        <div class="mb-2">{{ post.title }}</div>
        <app-tags-list [post]="post"></app-tags-list>
      </h1>

      <markdown class="" [src]="this.postUrl"></markdown>

      <div [appUtterances]="post.title"></div>
    </div>
  `,
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;
  postUrl: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private pageHeadService: PageHeadService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.post$ = this.postService.getPostDetails(params.title).pipe(
        tap((post) => {
          this.postUrl = `/_assets/posts/${post.link}.md`;
          this.pageHeadService.setTitle(post.title);
          this.pageHeadService.setOpenGraphTags(
            post.title,
            post.image,
            `/blog/post/${post.link}`
          );
          this.pageHeadService.setTwitterCardData(post.title, post.image);
        })
      );
    });
  }
}
