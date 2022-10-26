import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageService } from '../services/page.service';
import Page from '../models/page';
import { PageHeadService } from '../services/page-head.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, MarkdownModule, RouterModule],
  template: `
    <div class="content page-content" *ngIf="page$ | async; let page">
      <h1 class="text-indigo-600">{{ page.title }}</h1>

      <markdown [src]="pageUrl"></markdown>
    </div>
  `,
})
export class PageComponent implements OnInit {
  page$!: Observable<Page>;
  pageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private pageHeadService: PageHeadService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.page$ = this.pageService.getPageDetails(params.page).pipe(
        tap((page) => {
          this.pageHeadService.setTitle(page.title);
          this.pageUrl = `/_assets/pages/${page.filename}`;
        })
      );
    });
  }
}
