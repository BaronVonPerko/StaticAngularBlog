import { Component, OnInit } from "@angular/core";
import Page from "src/app/models/page.js";
import { PageService } from "src/app/services/page.service";
import { Router } from "@angular/router";
import { IconService } from "src/app/services/icon.service";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit {
  menuPages: Page[] = [];
  sidebarOpen = false;

  constructor(
    private pageServices: PageService,
    private router: Router,
    private iconService: IconService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const blogPage: Page = {
      inMenu: true,
      link: "/blog",
      title: "Blog",
      menuTitle: "Blog",
      icon: "md-collection",
    };

    const codeTipsArchivePage: Page = {
      inMenu: true,
      link: "/code-tips",
      title: "Code Tips",
      menuTitle: "Code Tips",
      icon: "md-collection",
    };

    const portfolioPage: Page = {
      inMenu: true,
      link: "/portfolio",
      title: "Portfolio",
      menuTitle: "Portfolio",
      icon: "md-camera",
    };

    const customizerUiPage: Page = {
      inMenu: true,
      link: "/wpcui",
      title: "Customizer UI Plugin for WordPress Developers",
      menuTitle: "Customizer UI Plugin",
      icon: "md-pencil",
    };

    this.pageServices.getMenuPages().subscribe((pages) => {
      this.menuPages = [
        blogPage,
        codeTipsArchivePage,
        portfolioPage,
        customizerUiPage,
        ...pages,
      ];
    });
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  goHome() {
    this.router.navigateByUrl("/");
  }

  getIcon(icon: string): SafeHtml {
    const path = this.iconService.getIcon(icon)?.path;
    if (path) {
      return this.sanitizer.bypassSecurityTrustHtml(path);
    }
  }

  get sidebarOverlayClasses(): string {
    const baseClasses =
      "fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300";
    const dynamicClasses = this.sidebarOpen
      ? "opacity-75 pointer-events-auto"
      : "opacity-0 pointer-events-none";

    return `${baseClasses} ${dynamicClasses}`;
  }

  get sidebarClasses(): string {
    const baseClasses =
      "fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300";
    const dynamicClasses = this.sidebarOpen
      ? "translate-x-0"
      : "-translate-x-full";

    return `${baseClasses} ${dynamicClasses}`;
  }
}
