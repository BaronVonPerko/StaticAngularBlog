import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../services/page.service';
import Page from '../models/page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page: Page;
  pageUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private pageService: PageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = this.pageService.getPageDetails(params.page);
      this.pageUrl = `/_assets/pages/${this.page.filename}`;
    });
  }

}
