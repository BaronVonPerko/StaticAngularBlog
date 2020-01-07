import { Component, OnInit } from '@angular/core';
import { Pages } from "../assets/pages/pages.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StaticAngularBlog';

  pageArray = [];

  ngOnInit() {
    this.pageArray = Pages;
  }

  getPageLink(title) {
    return `/page/${title}`;
  }
}
