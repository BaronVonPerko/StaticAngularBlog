import { Component, OnInit } from '@angular/core';
import { Pages } from '../../../_assets/pages/pages.json';
import Page from 'src/app/models/page.js';


@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit {
  menuPages: Page[] = [];

  constructor() { }

  ngOnInit() {
    this.menuPages = Pages.filter(page => page.inMenu);
  }

  getPageLink(title) {
    return `/page/${title}`;
  }

}
