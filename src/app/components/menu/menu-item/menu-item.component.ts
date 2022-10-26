import { Component, OnInit, Input } from '@angular/core';
import Page from 'src/app/models/page';
import { IconService } from 'src/app/services/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterLinkWithHref],
  template: `
    <a
      [routerLink]="page.link"
      routerLinkActive="bg-gray-900"
      class="no-underline mt-1 group flex items-center px-2 py-2 text-md leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
    >
      <svg
        class="mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-300 transition ease-in-out duration-150"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        [innerHTML]="icon"
      ></svg>

      {{ page.menuTitle }}
    </a>
  `,
})
export class MenuItemComponent implements OnInit {
  @Input() page: Page;

  constructor(
    private iconService: IconService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  get icon(): SafeHtml {
    const path = this.iconService.getIcon(this.page.icon)?.path;
    if (path) {
      return this.sanitizer.bypassSecurityTrustHtml(path);
    }
  }
}
