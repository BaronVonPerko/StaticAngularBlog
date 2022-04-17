import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import Post from 'src/app/models/post';
import { mergeMap, Observable, toArray } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() searchString: string;

  results$: Observable<Post[]>;

  constructor(private searchService: SearchService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.results$ = this.searchService.search(changes.searchString.currentValue).pipe(
      mergeMap(r => r),
      map(result => {
        return {...result, link: `/blog/post/${result.link}`};
      }),
      toArray()
    );
  }

  ngOnInit(): void {
  }

}
