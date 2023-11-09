import {RESTDataSource} from "@apollo/datasource-rest";

export class PhotosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getPhotos() {
    return await this.get('photos');
  }

  async getPhoto(id: number) {
    return await this.get(`photos/${id}`);
  }

  async getPhotosByAlbumId(albumId: number) {
    return await this.get(`photos?albumId=${albumId}`);
  }
}
