import { Component, OnInit } from '@angular/core';
import Page from 'src/app/models/page.js';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuPages: Page[] = [];
  sidebarOpen = true;

  constructor(
    private pageServices: PageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    const blogPage: Page = {
      inMenu: true,
      link: '/blog',
      title: 'Blog',
      menuTitle: 'Blog',
      icon: 'description',
    };

    const codeTipsArchivePage: Page = {
      inMenu: true,
      link: '/code-tips',
      title: 'Code Tips',
      menuTitle: 'Code Tips',
      icon: 'lightbulb',
    };

    const portfolioPage: Page = {
      inMenu: true,
      link: '/portfolio',
      title: 'Portfolio',
      menuTitle: 'Portfolio',
      icon: 'image',
    };

    const customizerUiPage: Page = {
      inMenu: true,
      link: '/wpcui',
      title: 'Customizer UI Plugin for WordPress Developers',
      menuTitle: 'Customizer UI Plugin',
      icon: 'brush',
    };

    const resumePage: Page = {
      inMenu: true,
      link: '/resume',
      title: 'Résumé',
      menuTitle: 'Résumé',
      icon: 'receipt_long',
    };

    this.pageServices.getMenuPages().subscribe((pages) => {
      this.menuPages = [
        blogPage,
        codeTipsArchivePage,
        portfolioPage,
        customizerUiPage,
        resumePage,
        ...pages,
      ];
    });
  }

}
