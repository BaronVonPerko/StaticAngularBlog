import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/post';
import { PageHeadService } from '../../services/page-head.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-archive',
  templateUrl: './tag-archive.component.html',
})
export class TagArchiveComponent implements OnInit {
  tag: string;
  posts$: Observable<Post[]>;

  constructor(private route: ActivatedRoute, private postService: PostService, private pageHeadService: PageHeadService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tag = params.tag;
      this.posts$ = this.postService.getPostsForTag(this.tag);
    });

    this.pageHeadService.setTitle('Tags');
  }

}
