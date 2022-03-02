import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { loadAnimation } from 'src/app/animations/loadAnimation';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  animations: [
    trigger('loadingAnimation', [
      transition(':enter', [useAnimation(loadAnimation)]),
    ]),
  ],
})
export class PostBoxComponent implements OnInit {
  @Input() post: Post;
  @Input() highlightedTag: string;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  get postLink() {
    return `/blog/post/${this.post.link}`;
  }

  get postImage() {
    return `/assets/images/${this.post.image}`;
  }
}
