import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Album, ConnectionInfo, Photo, PhotoParams} from 'src/app/albums/models';
import {Apollo} from "apollo-angular";
import {PHOTOS_PAGINATED} from "../albums/graphql/query-photos-paginated";
import {ALBUMS_PAGINATED, CREATE_ALBUM} from "../albums/graphql";
import {CREATE_PHOTO} from "../albums/graphql/mutation-create-photo";

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private apollo: Apollo) {
  }

  queryPhotosPaginated(albumId: number, page = 1, pageSize = 10): Observable<{ data: Photo[]; info: ConnectionInfo }> {
    return this.apollo
    .watchQuery<{ photosPaginated: { data: Photo[]; info: ConnectionInfo } }>({
      query: PHOTOS_PAGINATED,
      variables: {albumId, page, pageSize},
    })
    .valueChanges.pipe(map(({data}) => ({data: data.photosPaginated.data, info: data.photosPaginated.info})));
  }

  createPhoto(albumId: number, photoParams: PhotoParams): Observable<Photo | undefined> {
    return this.apollo
    .mutate<{ __typename: string; createPhoto: Photo }>({
      mutation: CREATE_PHOTO,
      variables: {
        albumId,
        createPhotoInput: {...photoParams},
      },
      refetchQueries: [PHOTOS_PAGINATED, 'photos'],
    })
    .pipe(map(({data}) => data?.createPhoto));
  }
}
