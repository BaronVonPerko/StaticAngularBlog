import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild(MenuComponent, {static: false}) theMenu;
  searchString = '';
  savedSearchString = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects
      });
    });
  }

  ngOnInit() {
  }

  openSidebar() {
    this.theMenu.openSidebar();
  }

  onSearchChanged(searchString: string) {
    this.searchString = searchString;
  }

  saveSearchString() {
    // if a search result is clicked, give time to change route
    setTimeout(() => {
      this.savedSearchString = this.searchString;
      this.searchString = null;
    }, 100);
  }

  restoreSearchString() {
    this.searchString = this.savedSearchString;
  }
}
