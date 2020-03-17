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

  constructor(private searchService: SearchService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.results = this.searchService.search(changes.searchString.currentValue);
  }

  ngOnInit(): void {
  }

}
