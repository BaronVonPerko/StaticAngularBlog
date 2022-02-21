import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../services/page.service';
import Page from '../models/page';
import { PageHeadService } from '../services/page-head.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  page: Page;

  constructor(private route: ActivatedRoute, private pageService: PageService, private pageHeadService: PageHeadService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageService.getPageDetails(params.page)
        .subscribe(details => this.page = details);

      this.pageHeadService.setTitle(this.page.title);
    });
  }

  get pageUrl() {
    return `/_assets/pages/${this.page.filename}`;
  }

}
