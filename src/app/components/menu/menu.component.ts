import { Component, OnInit } from '@angular/core';
import Page from 'src/app/models/page.js';
import { PageService } from 'src/app/services/page.service';
import { Router, RouterModule } from '@angular/router';
import { IconService } from 'src/app/services/icon.service';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, RouterModule],
  template: `
    <ng-container *ngIf="menuPages$ | async; let menuPages">
      <!-- Off-canvas menu for mobile -->
      <div class="md:hidden">
        <div
          (click)="sidebarOpen = false"
          [className]="sidebarOverlayClasses"
        ></div>
        <div [className]="sidebarClasses">
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              *ngIf="sidebarOpen"
              (click)="sidebarOpen = false"
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
            >
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="shrink-0 flex items-center h-32 px-4 bg-gray-900">
            <img
              class="h-16 w-auto mx-auto"
              (click)="goHome()"
              src="../../../assets/images/logo.png"
              alt="Chris Perko"
            />
          </div>
          <div class="flex-1 h-0 overflow-y-auto">
            <nav class="px-2 py-4">
              <app-menu-item
                *ngFor="let page of menuPages"
                (click)="sidebarOpen = false"
                [page]="page"
              >
              </app-menu-item>
            </nav>
          </div>
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden h-full md:flex md:shrink-0">
        <div class="flex flex-col w-64 bg-gray-800 pt-5 pb-4">
          <div class="flex items-center shrink-0 px-4">
            <img
              class="h-16w-auto mx-auto cursor-pointer"
              (click)="goHome()"
              src="../../../assets/images/logo.png"
              alt="Chris Perko"
            />
          </div>
          <div class="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 px-2 bg-gray-800">
              <div class="mb-16 flex justify-center">
                <a href="https://twitter.com/chrisjperko" target="_blank">
                  <svg
                    class="mx-3 h-6 w-6 text-gray-400 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    [innerHTML]="getIcon('social-twitter')"
                  ></svg>
                </a>
                <a href="https://github.com/baronvonperko" target="_blank">
                  <svg
                    class="mx-3 h-6 w-6 text-gray-400 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    [innerHTML]="getIcon('social-github')"
                  ></svg>
                </a>
              </div>

              <app-menu-item *ngFor="let page of menuPages" [page]="page">
              </app-menu-item>
            </nav>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class MenuComponent implements OnInit {
  menuPages$!: Observable<Page[]>;
  sidebarOpen = false;

  constructor(
    private pageServices: PageService,
    private router: Router,
    private iconService: IconService
  ) {}

  ngOnInit() {
    const blogPage: Page = {
      inMenu: true,
      link: '/blog',
      title: 'Blog',
      menuTitle: 'Blog',
      icon: 'md-collection',
    };

    const codeTipsArchivePage: Page = {
      inMenu: true,
      link: '/code-tips',
      title: 'Code Tips',
      menuTitle: 'Code Tips',
      icon: 'md-collection',
    };

    const talksPage: Page = {
      inMenu: true,
      link: '/talks',
      title: 'Talks',
      menuTitle: 'Talks',
      icon: 'md-megaphone',
    };

    const portfolioPage: Page = {
      inMenu: true,
      link: '/portfolio',
      title: 'Portfolio',
      menuTitle: 'Portfolio',
      icon: 'md-camera',
    };

    const customizerUiPage: Page = {
      inMenu: true,
      link: '/wpcui',
      title: 'Customizer UI Plugin for WordPress Developers',
      menuTitle: 'Customizer UI Plugin',
      icon: 'md-pencil',
    };

    const resumePage: Page = {
      inMenu: true,
      link: '/resume',
      title: 'Résumé',
      menuTitle: 'Résumé',
      icon: 'md-clipboard',
    };

    this.menuPages$ = this.pageServices.getMenuPages().pipe(
      map((pages) => {
        return [
          blogPage,
          talksPage,
          codeTipsArchivePage,
          portfolioPage,
          customizerUiPage,
          resumePage,
          ...pages,
        ];
      })
    );
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  getIcon(icon: string): SafeHtml {
    return this.iconService.getIconPath(icon);
  }

  get sidebarOverlayClasses(): string {
    const baseClasses =
      'fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300';
    const dynamicClasses = this.sidebarOpen
      ? 'opacity-75 pointer-events-auto'
      : 'opacity-0 pointer-events-none';

    return `${baseClasses} ${dynamicClasses}`;
  }

  get sidebarClasses(): string {
    const baseClasses =
      'fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300';
    const dynamicClasses = this.sidebarOpen
      ? 'translate-x-0'
      : '-translate-x-full';

    return `${baseClasses} ${dynamicClasses}`;
  }
}
