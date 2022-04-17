import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../services/page.service';
import Page from '../models/page';
import { PageHeadService } from '../services/page-head.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  page$!: Observable<Page>;
  pageUrl: string;

  constructor(private route: ActivatedRoute,
              private pageService: PageService,
              private pageHeadService: PageHeadService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page$ = this.pageService.getPageDetails(params.page).pipe(
        tap(page => {
          this.pageHeadService.setTitle(page.title);
          this.pageUrl = `/_assets/pages/${page.filename}`;
        })
      );
    });
  }

}
