import { Component, OnInit } from '@angular/core';
import { Pages } from '../assets/pages/pages.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StaticAngularBlog';

  pageArray = [];
  menuPages = [];

  ngOnInit() {
    this.pageArray = Pages;
    this.menuPages = this.pageArray.filter(page => page.inMenu);
  }

  getPageLink(title) {
    return `/page/${title}`;
  }
}
