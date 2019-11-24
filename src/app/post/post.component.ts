import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postTitle: string;
  postUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postTitle = this.route.snapshot.paramMap.get('title');
    this.postUrl = `/assets/posts/${this.postTitle}.md`;
  }

}
