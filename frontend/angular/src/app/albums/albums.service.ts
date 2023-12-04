import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Album, AlbumParams, ConnectionInfo} from 'src/app/albums/models';
import {Apollo} from "apollo-angular";
import {ALBUM, ALBUMS_PAGINATED, CREATE_ALBUM, REMOVE_ALBUM, UPDATE_ALBUM} from "./graphql";

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private apollo: Apollo) {
  }

  queryAlbumsPaginated(page = 1, pageSize = 10): Observable<{ data: Album[]; info: ConnectionInfo }> {
    return this.apollo
    .watchQuery<{ albumsPaginated: { data: Album[]; info: ConnectionInfo } }>({
      query: ALBUMS_PAGINATED,
      variables: {page, pageSize},
    })
    .valueChanges.pipe(map(({data}) => ({data: data.albumsPaginated.data, info: data.albumsPaginated.info})));
  }

  queryAlbum(id: number): Observable<{ album: Album; loading: boolean }> {
    return this.apollo
    .watchQuery<{ album: Album }>({
      query: ALBUM,
      variables: {id},
    })
    .valueChanges.pipe(
      map(({data, loading}) => ({
        album: data?.album,
        loading,
      }))
    );
  }

  createAlbum(albumParams: AlbumParams): Observable<Album | undefined> {
    return this.apollo
    .mutate<{ __typename: string; createAlbum: Album }>({
      mutation: CREATE_ALBUM,
      variables: {
        createAlbum: {...albumParams},
      },
      refetchQueries: [ALBUMS_PAGINATED, 'albums'],
    })
    .pipe(map(({data}) => data?.createAlbum));
  }

  updateAlbum(id: number, albumParams: AlbumParams): Observable<Album | undefined> {
    return this.apollo
    .mutate<{ updateAlbum: Album }>({
      mutation: UPDATE_ALBUM,
      variables: {
        id,
        updateAlbum: {...albumParams},
      },
    })
    .pipe(map(({data}) => data?.updateAlbum));
  }

  removeAlbum(id: number): Observable<Album | undefined> {
    return this.apollo
    .mutate<{ removeAlbum: Album }>({
      mutation: REMOVE_ALBUM,
      variables: {id},
      refetchQueries: [ALBUMS_PAGINATED, 'albums']
    })
    .pipe(map(({data}) => data?.removeAlbum));
  }
}
