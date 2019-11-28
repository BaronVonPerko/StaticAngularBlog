import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageTitle: string;
  pageUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pageUrl = `/assets/pages/${this.router.url.replace('\/', '')}.md`;
  }

}
