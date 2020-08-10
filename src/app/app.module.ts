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
import { PortfolioComponent } from './custom-pages/portfolio/portfolio.component';
import { PortfolioGridComponent } from './custom-pages/portfolio/portfolio-grid/portfolio-grid.component';
import { PortfolioItemComponent } from './custom-pages/portfolio/portfolio-item/portfolio-item.component';
import { PortfolioModalComponent } from './custom-pages/portfolio/portfolio-modal/portfolio-modal.component';
import { WpcuiComponent } from './custom-pages/wpcui/wpcui.component';
import { CodetipComponent } from './codetip/codetip.component';
import { CodeTipsArchiveComponent } from './custom-pages/code-tips-archive/code-tips-archive.component';
import { CodetipBoxComponent } from './components/codetip-box/codetip-box.component';
import { ScullyLibModule } from '@scullyio/ng-lib';


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
    PortfolioComponent,
    PortfolioGridComponent,
    PortfolioItemComponent,
    PortfolioModalComponent,
    WpcuiComponent,
    CodetipComponent,
    CodeTipsArchiveComponent,
    CodetipBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
