import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import Post from 'src/app/models/post';
import { mergeMap, Observable, toArray } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  template: `
    <div class="absolute inset-x-0 z-20">
      <div class="bg-white shadow overflow-hidden">
        <ul>
          <li *ngFor="let result of results$ | async">
            <a
              [routerLink]="[result.link]"
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div
                    class="text-lg leading-5 font-bold text-indigo-800 truncate"
                  >
                    {{ result.title }}
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <span
                      *ngFor="let tag of result.tags?.split(',')"
                      class="mr-2 px-2 inline-flex text-xs leading-5 rounded-full bg-indigo-100 text-indigo-800 font-semibold"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                  <div
                    class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0"
                  >
                    <svg
                      class="shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span
                      >Posted on
                      <time datetime="2020-01-07">{{
                        result.date | date
                      }}</time></span
                    >
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() searchString: string;

  results$: Observable<Post[]>;

  constructor(private searchService: SearchService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.results$ = this.searchService
      .search(changes.searchString.currentValue)
      .pipe(
        mergeMap((r) => r),
        map((result) => {
          return { ...result, link: `/blog/post/${result.link}` };
        }),
        toArray()
      );
  }

  ngOnInit(): void {}
}
