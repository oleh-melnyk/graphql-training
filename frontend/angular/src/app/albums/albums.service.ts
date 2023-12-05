import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Album, AlbumConnection, AlbumParams, ConnectionInfo} from 'src/app/albums/models';
import {Apollo} from "apollo-angular";
import {ALBUM, ALBUMS_PAGINATED, CREATE_ALBUM, REMOVE_ALBUM, UPDATE_ALBUM} from "./graphql";
import {Post} from "../posts/models";
import {POSTS} from "../posts/graphql";
import {ALBUMS} from "./graphql/query-albums";

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private apollo: Apollo) {
  }

  queryAlbumsPaginated(page = 1, pageSize = 5): Observable<{ data: Album[]; info: ConnectionInfo }> {
    return this.apollo
    .watchQuery<{ albumsPaginated: { data: Album[]; info: ConnectionInfo } }>({
      query: ALBUMS_PAGINATED,
      variables: {page, pageSize},
    })
    .valueChanges.pipe(map(({data}) => ({data: data.albumsPaginated.data, info: data.albumsPaginated.info})));
  }

  queryAlbums(): Observable<Album[]> {
    return this.apollo
    .watchQuery<{ albums: Album[] }>({
      query: ALBUMS,
    })
    .valueChanges.pipe(map(({ data }) => data?.albums));
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
      optimisticResponse: {
        __typename: 'Mutation',
        createAlbum: {
          __typename: 'Album',
          ...albumParams,
          id: Math.round(Math.random() * -1000000),
        },
      },
      update: (cache, { data }) => {
        const albumsState = cache.readQuery<{albumsPaginated: AlbumConnection}>(
          { query: ALBUMS_PAGINATED , variables: {page: 1, pageSize: 5}}
        )!.albumsPaginated;

        cache.writeQuery({
          query: ALBUMS_PAGINATED,
          variables: {page: 1, pageSize: 5},
          data: {albumsPaginated: { data: [data?.createAlbum, ...albumsState.data.slice(1, 6)], info: albumsState.info }},
        });
      },
    })
    .pipe(map(({data}) => data?.createAlbum));
  }

  updateAlbum(albumId: number, albumParams: AlbumParams): Observable<Album | undefined> {
    return this.apollo
    .mutate<{  __typename: string; updateAlbum: Album }>({
      mutation: UPDATE_ALBUM,
      variables: {
        id: albumId,
        updateAlbum: {...albumParams},
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateAlbum: {
          __typename: 'Album',
          ...albumParams,
          id: albumId,
        },
      },
      update: (cache, { data }) => {
        const state = cache.readQuery<{ albums: Album[] }>({ query: ALBUMS });
        const albums = (state?.albums || []).map(({ id, ...album }) =>
          albumId === id ? { id, ...album, ...data?.updateAlbum } : { id, ...album }
        );

        const albumsStatePaginated = cache.readQuery<{albumsPaginated: AlbumConnection}>(
          { query: ALBUMS_PAGINATED , variables: {page: 1, pageSize: 5}}
        );

        cache.writeQuery({
          query: ALBUMS_PAGINATED,
          variables: {page: 1, pageSize: 5},
          data: albumsStatePaginated,
        });
      },
    })
    .pipe(map(({data}) => data?.updateAlbum));
  }

  removeAlbum(id: number): Observable<Album | undefined> {
    return this.apollo
    .mutate<{ removeAlbum: Album }>({
      mutation: REMOVE_ALBUM,
      variables: {id},
      update: (cache) => {
        const normalizedId = cache.identify({ id, __typename: 'Album' });
        cache.evict({ id: normalizedId });
        cache.gc();
      },
    })
    .pipe(map(({data}) => data?.removeAlbum));
  }
}
