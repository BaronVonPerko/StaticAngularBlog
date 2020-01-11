import { Component, OnInit } from '@angular/core';
import Page from 'src/app/models/page.js';
import { PageService } from 'src/app/services/page.service';


@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit {
  menuPages: Page[] = [];

  constructor(private pageServices: PageService) { }

  ngOnInit() {
    this.menuPages = this.pageServices.getMenuPages();
  }

}
