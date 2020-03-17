import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild(MenuComponent, {static: false}) theMenu;
  searchString = '';

  ngOnInit() {
  }

  openSidebar() {
    this.theMenu.openSidebar();
  }

  onSearchChanged(searchString: string) {
    this.searchString = searchString;
  }
}
