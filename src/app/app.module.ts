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
import { PortfolioComponent } from './custom-pages/portfolio/portfolio.component';
import { PortfolioGridComponent } from './custom-pages/portfolio/portfolio-grid/portfolio-grid.component';
import { PortfolioItemComponent } from './custom-pages/portfolio/portfolio-item/portfolio-item.component';
import { PortfolioModalComponent } from './custom-pages/portfolio/portfolio-modal/portfolio-modal.component';
import { WpcuiComponent } from './custom-pages/wpcui/wpcui.component';
import { CodetipComponent } from './codetip/codetip.component';
import { CodeTipsArchiveComponent } from './custom-pages/code-tips-archive/code-tips-archive.component';
import { CodetipBoxComponent } from './components/codetip-box/codetip-box.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { UtterancesDirective } from './directives/utterances.directive';
import { ResumeComponent } from './custom-pages/resume/resume.component';
import { ResumeSectionHeadingComponent } from './custom-pages/resume/section-heading/resume-section-heading.component';
import { ResumeExperienceComponent } from './custom-pages/resume/resume-experience/resume-experience.component';
import { ResumeListComponent } from './custom-pages/resume/resume-list/resume-list.component';
import { ResumeListItemComponent } from './custom-pages/resume/resume-list/resume-list-item/resume-list-item.component';
import { ResumeTechStackComponent } from './custom-pages/resume/resume-tech-stack/resume-tech-stack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


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
    PortfolioComponent,
    PortfolioGridComponent,
    PortfolioItemComponent,
    PortfolioModalComponent,
    WpcuiComponent,
    CodetipComponent,
    CodeTipsArchiveComponent,
    CodetipBoxComponent,
    UtterancesDirective,
    ResumeComponent,
    ResumeSectionHeadingComponent,
    ResumeExperienceComponent,
    ResumeListComponent,
    ResumeListItemComponent,
    ResumeTechStackComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    ScullyLibModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
