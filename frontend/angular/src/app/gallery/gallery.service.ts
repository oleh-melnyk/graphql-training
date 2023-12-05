import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Album, AlbumConnection, ConnectionInfo, Photo, PhotoConnection, PhotoParams} from 'src/app/albums/models';
import {Apollo} from "apollo-angular";
import {PHOTOS_PAGINATED} from "../albums/graphql/query-photos-paginated";
import {CREATE_PHOTO} from "../albums/graphql/mutation-create-photo";
import {Comment, Post} from "../posts/models";
import {POST} from "../posts/graphql";
import {POSTS_COMMENTS} from "../@shared/components/header/graphql";
import {ALBUMS} from "../albums/graphql/query-albums";
import {ALBUMS_PAGINATED} from "../albums/graphql";

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private apollo: Apollo) {
  }

  queryPhotosPaginated(albumId: number, page = 1, pageSize = 9): Observable<PhotoConnection> {
    return this.apollo
    .watchQuery<{ photosPaginated: PhotoConnection }>({
      query: PHOTOS_PAGINATED,
      variables: {albumId, page, pageSize},
    })
    .valueChanges.pipe(map(({data}) => ({data: data.photosPaginated.data, info: data.photosPaginated.info})));
  }

  createPhoto(albumId: number, photoParams: PhotoParams): Observable<Photo | undefined> {
    photoParams = {...photoParams, thumbnailUrl: photoParams.url}
    return this.apollo
    .mutate<{ __typename: string; createPhoto: Photo }>({
      mutation: CREATE_PHOTO,
      variables: {
        albumId,
        createPhotoInput: {...photoParams },
      },
      refetchQueries: [PHOTOS_PAGINATED, 'photos'],
/*      optimisticResponse: {
        __typename: 'Mutation',
        createPhoto: {
          __typename: 'Photo',
          id: Math.round(Math.random() * -1000000),
          albumId,
          ...photoParams,
        },
      },
      update: (cache, { data }) => {
        const photosState = cache.readQuery<{photosPaginated: PhotoConnection}>(
          { query: PHOTOS_PAGINATED , variables: {albumId, page: 1, pageSize: 9}}
        )!.photosPaginated;

        cache.writeQuery({
          query: PHOTOS_PAGINATED,
          variables: {albumId, page: 1, pageSize: 9},
          data: {photosPaginated: { data: [data?.createPhoto, ...photosState.data.slice(1, 10)], info: photosState.info }},
        });
      },*/
    })
    .pipe(map(({data}) => data?.createPhoto));
  }
}
