import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { PageHeadService } from '../services/page-head.service';
import { delay, switchMap, tap } from 'rxjs/operators';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TagsListComponent } from '../components/tags-list/tags-list.component';
import { MarkdownModule } from 'ngx-markdown';
import { UtterancesDirective } from '../directives/utterances.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    TagsListComponent,
    MarkdownModule,
    NgOptimizedImage,
    UtterancesDirective,
  ],
  providers: [PostService],
  template: `
    <div class="content" *ngIf="post$ | async; let post">

      <div class="flex justify-between">
        <app-tags-list [post]="post"></app-tags-list>
        <div class="mb-2 text-indigo-900">{{post.date | date: 'longDate'}}</div>
      </div>

      <h1 class="text-indigo-600 mt-4">
        <div>{{ post.title }}</div>
      </h1>

      <img *ngIf="postImgUrl" [ngSrc]="postImgUrl" class="w-full" width="500" height="400" alt="Post Featured Image"/>

      <markdown class="" [src]="this.postUrl"></markdown>

      <div [appUtterances]="post.title"></div>
    </div>
  `,
})
export class PostComponent {
  #pageHeadService = inject(PageHeadService);
  #postService = inject(PostService);
  postUrl: string;
  postImgUrl: string;

  // tap and delay are a hack until this is resolved: https://github.com/angular/angular/issues/47813
  post$ = inject(ActivatedRoute).params.pipe(
    tap(() => this.postImgUrl = null),
    switchMap(({title}) => this.#postService.getPostDetails(title)),
    delay(0),
    tap({
      next: ({link, image, title}) => {
        this.postUrl = `/_assets/posts/${link}.md`;
        this.postImgUrl = `/assets/images/${image}`;
        this.#pageHeadService.setTitle(title);
        this.#pageHeadService.setOpenGraphTags(title, image, `/blog/post/${link}`);
        this.#pageHeadService.setTwitterCardData(title, image);
      }
    })
  );
}
