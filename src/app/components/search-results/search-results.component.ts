import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() searchString: string;

  results: Post[] = [];

  constructor(private searchService: SearchService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchService.search(changes.searchString.currentValue)
      .subscribe(searchResults => this.results = searchResults);
  }

  ngOnInit(): void {
  }

  getLink(post: Post): string {
    return `/blog/post/${post.link}`;
  }

}
