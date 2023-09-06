import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { POSTS_COMMENTS } from './graphql';
import { Statistic } from './models';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private apollo: Apollo) {}

  queryPostAndCommentsCount(): Observable<Statistic> {
    return this.apollo
      .watchQuery<{ posts: { id: string }[]; comments: { id: string }[] }>({
        query: POSTS_COMMENTS,
      })
      .valueChanges.pipe(
        map(({ data }) => ({
          postsCount: data?.posts.length || 0,
          commentsCount: data?.comments?.length || 0,
        }))
      );
  }
}
