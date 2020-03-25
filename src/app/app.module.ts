import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './custom-pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { BlogArchiveComponent } from './custom-pages/blog-archive/blog-archive.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { TagArchiveComponent } from './custom-pages/tag-archive/tag-archive.component';
import { PostBoxComponent } from './components/post-box/post-box.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { WorkWithMeComponent } from './custom-pages/work-with-me/work-with-me.component';
import { ProjectTypeChooserComponent } from './custom-pages/work-with-me/project-type-chooser/project-type-chooser.component';
import { ProjectTypeComponent } from './custom-pages/work-with-me/project-type-chooser/project-type/project-type.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PageComponent,
    HomeComponent,
    MenuComponent,
    BlogArchiveComponent,
    MenuItemComponent,
    PostBoxComponent,
    TagsListComponent,
    TagArchiveComponent,
    SearchResultsComponent,
    WorkWithMeComponent,
    ProjectTypeChooserComponent,
    ProjectTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
