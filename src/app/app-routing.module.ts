import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './custom-pages/home/home.component';
import { BlogArchiveComponent } from './custom-pages/blog-archive/blog-archive.component';
import { TagArchiveComponent } from './custom-pages/tag-archive/tag-archive.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { WorkWithMeComponent } from './custom-pages/work-with-me/work-with-me.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work-with-me', component: WorkWithMeComponent },
  { path: 'blog', component: BlogArchiveComponent },
  { path: 'blog/tag/:tag', component: TagArchiveComponent },
  { path: 'blog/post/:title', component: PostComponent },
  { path: ':page', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
