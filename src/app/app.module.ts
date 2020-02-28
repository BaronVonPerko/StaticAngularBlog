import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Routes, RouterModule } from '@angular/router';
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


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogArchiveComponent },
  { path: 'post/:title', component: PostComponent },
  { path: ':page', component: PageComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PageComponent,
    HomeComponent,
    MenuComponent,
    BlogArchiveComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
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
