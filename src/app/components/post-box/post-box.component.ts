import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html'
})
export class PostBoxComponent implements OnInit {

  @Input() post: Post;
  @Input() highlightedTag: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void { }

  get postLink() {
    return `/blog/post/${this.post.link}`;
  }

  get postImage() {
    return `/assets/images/${this.post.image}`;
  }

  get postDate() {
    const datetime = new Date(this.post.date);
    return `${datetime.getFullYear()}-${datetime.getMonth() + 1}-${datetime.getDate() + 1}`;
  }

}
