import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import Page from 'src/app/models/page';
import { IconService } from 'src/app/services/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {
  @Input() page: Page;

  constructor(private iconService: IconService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get icon(): SafeHtml {
    const path = this.iconService.getIcon(this.page.icon)?.path;
    if (path) {
      return this.sanitizer.bypassSecurityTrustHtml(path);
    }
  }

}
