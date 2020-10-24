import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './custom-pages/home/home.component';
import { BlogArchiveComponent } from './custom-pages/blog-archive/blog-archive.component';
import { TagArchiveComponent } from './custom-pages/tag-archive/tag-archive.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { PortfolioComponent } from './custom-pages/portfolio/portfolio.component';
import { WpcuiComponent } from './custom-pages/wpcui/wpcui.component';
import { CodeTipsArchiveComponent } from './custom-pages/code-tips-archive/code-tips-archive.component';
import { CodetipComponent } from './codetip/codetip.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'wpcui', component: WpcuiComponent },
  { path: 'blog', component: BlogArchiveComponent },
  { path: 'blog/tag/:tag', component: TagArchiveComponent },
  { path: 'blog/post/:title', component: PostComponent },
  { path: 'code-tips', component: CodeTipsArchiveComponent },
  { path: 'code-tips/:title', component: CodetipComponent },
  { path: ':page', component: PageComponent }, // this is a catch-all and needs to be last
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
