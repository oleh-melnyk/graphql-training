import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { ConnectionInfo, Post } from 'src/app/posts/models';
import { PostsService } from 'src/app/posts/posts.service';

@Component({
  selector: 'app-posts-paginated',
  templateUrl: './posts-paginated.component.html',
  styleUrls: ['./posts-paginated.component.scss'],
})
export class PostsPaginatedComponent implements OnInit {
  posts!: Post[];
  info!: ConnectionInfo;
  itemsPerPage = 3;

  constructor(
    private router: Router,
    private postsService: PostsService,
  ) {}

  ngOnInit(): void {
    this.queryPosts();
  }

  queryPosts(page = 1): void {
    this.postsService.queryPostsPaginated(page, this.itemsPerPage).subscribe(({ data, info }) => {
      this.posts = data;
      this.info = info;
    });
  }

  onPageChange({ page }: PaginatorState): void {
    this.queryPosts(1 + page!);
  }

  showDetails(post: Post): void {
    this.router.navigate([`/posts/${post.id}`]);
  }
}
