import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';
import { PageHeadService } from '../../services/page-head.service';
import { CommonModule } from '@angular/common';
import { PostBoxComponent } from '../../components/post-box/post-box.component';

@Component({
  selector: 'app-tag-archive',
  standalone: true,
  imports: [CommonModule, PostBoxComponent, RouterModule],
  template: `
    <h1 class="text-indigo-600">
      Posts for Tag: <span class="text-indigo-800">{{ tag }}</span>
    </h1>

    <app-post-box
      *ngFor="let post of posts"
      [highlightedTag]="tag"
      [post]="post"
    ></app-post-box>
  `,
})
export class TagArchiveComponent implements OnInit, OnChanges {
  tag: string;
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private pageHeadService: PageHeadService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tag = params.tag;
      this.fetchPosts();
    });

    this.pageHeadService.setTitle('Tags');
  }

  ngOnChanges(): void {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.posts = [];
    this.postService
      .getPostsForTag(this.tag)
      .subscribe((post) => this.posts.push(post));
  }
}
