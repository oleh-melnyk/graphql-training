import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConnectionInfo, Photo, PhotoParams } from 'src/app/albums/models';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  queryPhotosPaginated(albumId: number, page = 1, pageSize = 10): Observable<{ data: Photo[]; info: ConnectionInfo }> {
    // TODO
    return of({
      data: [
        {
          albumId: 1,
          id: 1,
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://via.placeholder.com/600/92c952',
        },
        {
          albumId: 1,
          id: 2,
          title: 'reprehenderit est deserunt velit ipsam',
          url: 'https://via.placeholder.com/600/771796',
        },
        {
          albumId: 1,
          id: 3,
          title: 'officia porro iure quia iusto qui ipsa ut modi',
          url: 'https://via.placeholder.com/600/24f355',
        },
        {
          albumId: 1,
          id: 4,
          title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
          url: 'https://via.placeholder.com/600/d32776',
        },
        {
          albumId: 1,
          id: 5,
          title: 'natus nisi omnis corporis facere molestiae rerum in',
          url: 'https://via.placeholder.com/600/f66b97',
        },
        {
          albumId: 1,
          id: 6,
          title: 'accusamus ea aliquid et amet sequi nemo',
          url: 'https://via.placeholder.com/600/56a8c2',
        },
        {
          albumId: 1,
          id: 7,
          title: 'officia delectus consequatur vero aut veniam explicabo molestias',
          url: 'https://via.placeholder.com/600/b0f7cc',
        },
        {
          albumId: 1,
          id: 8,
          title: 'aut porro officiis laborum odit ea laudantium corporis',
          url: 'https://via.placeholder.com/600/54176f',
        },
        {
          albumId: 1,
          id: 9,
          title: 'beatae et provident et ut vel',
          url: 'https://via.placeholder.com/600/810b14',
        },
      ],
      info: {
        page: 1,
        pages: 3,
        total: 8,
      },
    });
  }

  createPhoto(albumId: number, photoParams: PhotoParams): Observable<Photo | undefined> {
    // TODO
    return of({
      albumId: 1,
      id: 10,
      title: 'qui eius qui autem sed',
      url: 'https://via.placeholder.com/600/51aa97',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
    });
  }
}
