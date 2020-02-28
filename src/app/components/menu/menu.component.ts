import { Component, OnInit } from '@angular/core';
import Page from 'src/app/models/page.js';
import { PageService } from 'src/app/services/page.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuPages: Page[] = [];

  constructor(private pageServices: PageService) { }

  ngOnInit() {
    this.menuPages = this.pageServices.getMenuPages();
  }

}
