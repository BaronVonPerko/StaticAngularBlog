import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html'
})
export class TagsListComponent implements OnInit {
  @Input() post: Post;
  @Input() highlightedTag: string;
  tags: string[];

  constructor() { }

  ngOnInit(): void {
    this.tags = this.post.tags.split(',');
  }

  getTagHref(tag: string): string {
    return `/blog/tag/${tag}`;
  }

}
