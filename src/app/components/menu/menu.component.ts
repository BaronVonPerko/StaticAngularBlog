import { Component, OnInit } from '@angular/core';
import Page from 'src/app/models/page.js';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuPages: Page[] = [];
  sidebarOpen = false;

  constructor(private pageServices: PageService, private router: Router) { }

  ngOnInit() {

    const blogPage: Page = {
      inMenu: true,
      link: '/blog',
      title: 'Blog',
      menuTitle: 'Blog',
      icon: 'md-collection'
    };

    this.menuPages = [blogPage, ...this.pageServices.getMenuPages()];

  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

}
