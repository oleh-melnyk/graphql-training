import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ChipModule } from 'primeng/chip';

import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/@shared/components';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from 'src/app/posts/posts.component';
import { PostsPaginatedComponent } from 'src/app/posts/posts-paginated.component';
import { PostComponent } from 'src/app/post/post.component';
import { AlbumsComponent } from 'src/app/albums/albums.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PaginatorModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ImageModule,
    ToastModule,
    CardModule,
    InputTextareaModule,
    DialogModule,
    DynamicDialogModule,
    ChipModule,
    GraphQLModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutComponent,
    PostsComponent,
    PostComponent,
    PostsPaginatedComponent,
    AlbumsComponent,
    GalleryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
