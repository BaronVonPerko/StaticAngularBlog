import { Component, OnInit } from '@angular/core';
import Page from 'src/app/models/page.js';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';
import { IconService } from 'src/app/services/icon.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuPages: Page[] = [];
  sidebarOpen = false;

  constructor(
    private pageServices: PageService,
    private router: Router,
    private iconService: IconService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    const blogPage: Page = {
      inMenu: true,
      link: '/blog',
      title: 'Blog',
      menuTitle: 'Blog',
      icon: 'md-collection'
    };

    const portfolioPage: Page = {
      inMenu: true,
      link: '/portfolio',
      title: 'Portfolio',
      menuTitle: 'Portfolio',
      icon: 'md-camera'
    };

    const workWithMePage: Page = {
      inMenu: true,
      link: '/work-with-me',
      title: 'Work With Me',
      menuTitle: 'Work With Me',
      icon: 'md-briefcase'
    };

    const customizerUiPage: Page = {
      inMenu: true,
      link: '/wpcui',
      title: 'Customizer UI Plugin for WordPress Developers',
      menuTitle: 'Customizer UI Plugin',
      icon: 'md-pencil'
    }

    this.pageServices.getMenuPages().subscribe(pages => {
      this.menuPages = [blogPage, portfolioPage, workWithMePage, customizerUiPage, ...pages];
    });
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  getIcon(icon: string): SafeHtml {
    const path = this.iconService.getIcon(icon)?.path;
    if (path) {
      return this.sanitizer.bypassSecurityTrustHtml(path);
    }
  }

}
