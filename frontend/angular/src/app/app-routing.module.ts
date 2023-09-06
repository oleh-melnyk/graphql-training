import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { AboutComponent } from 'src/app/about/about.component';
import { PostsComponent } from 'src/app/posts/posts.component';
import { PostsPaginatedComponent } from 'src/app/posts/posts-paginated.component';
import { PostComponent } from 'src/app/post/post.component';
import { AlbumsComponent } from 'src/app/albums/albums.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts-paginated',
    component: PostsPaginatedComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'albums/:id',
    component: GalleryComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
