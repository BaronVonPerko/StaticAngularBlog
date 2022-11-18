import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="shrink-0 flex">
      <a
        *ngFor="let tag of tags"
        [routerLink]="getTagHref(tag)"
        [ngClass]="
          tag === highlightedTag
            ? 'text-indigo-200 bg-indigo-800 font-bold'
            : 'bg-indigo-100 text-indigo-800 font-semibold'
        "
        class="mr-2 px-2 inline-flex text-xs leading-5 rounded-full"
      >
        #{{ tag }}
      </a>
    </div>
  `,
})
export class TagsListComponent implements OnInit {
  @Input() post: Post;
  @Input() highlightedTag: string;
  tags: string[];

  constructor() {}

  ngOnInit(): void {
    this.tags = this.post.tags?.split(',');
  }

  getTagHref(tag: string): string {
    return `/blog/tag/${tag}`;
  }
}
