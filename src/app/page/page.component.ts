import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../services/page.service';
import Page from '../models/page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  page: Page;

  constructor(private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageService.getPageDetails(params.page)
        .subscribe(details => this.page = details);
    });
  }

  get pageUrl() {
    return `/_assets/pages/${this.page.filename}`;
  }

}
