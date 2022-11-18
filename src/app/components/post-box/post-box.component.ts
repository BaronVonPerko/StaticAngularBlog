import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/post';
import { transition, trigger, useAnimation } from '@angular/animations';
import { loadAnimation } from 'src/app/animations/loadAnimation';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TagsListComponent } from '../tags-list/tags-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-box',
  standalone: true,
  imports: [CommonModule, TagsListComponent, RouterLink, NgOptimizedImage],
  animations: [
    trigger('loadingAnimation', [
      transition(':enter', [useAnimation(loadAnimation)]),
    ]),
  ],
  template: `
    <div @loadingAnimation *ngIf="post" class="relative bg-gray-800 my-8">
      <div class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img class="w-full h-full object-cover" [ngSrc]="postImage" width="500" height="300" alt="Post Image" />
      </div>
      <div
        class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div class="md:ml-auto md:w-1/2 md:pl-10">
          <div
            class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300"
          >
            {{ post.date | date }}
          </div>
          <h2
            class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
          >
            {{ post.title }}
          </h2>
          <app-tags-list
            [highlightedTag]="highlightedTag"
            [post]="post"
          ></app-tags-list>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <a
                [routerLink]="postLink"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:ring transition duration-150 ease-in-out"
              >
                Read More
                <svg
                  class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PostBoxComponent implements OnInit {
  @Input() post: Post;
  @Input() highlightedTag: string;

  ngOnInit(): void {}

  get postLink() {
    return `/blog/post/${this.post.link}`;
  }

  get postImage() {
    return `/assets/images/${this.post.image}`;
  }
}
