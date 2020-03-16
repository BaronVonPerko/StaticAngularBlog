import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html'
})
export class PostBoxComponent implements OnInit {

  @Input() post: Post;
  tags: string[];

  constructor() { }

  ngOnInit(): void {
    this.tags = this.post.tags.split(',');
  }

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
