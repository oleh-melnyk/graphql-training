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

  async createPhoto(albumId: string, createPhotoInput: { title: string; body: string }) {
    return await this.post('photos', { albumId, ...createPhotoInput } as any);
  }

  async updatePhoto(id: number, updatePhotoInput: { title: string; body: string }) {
    return await this.put(`photos/${id}`, updatePhotoInput).then(res => ({...res, ...updatePhotoInput}));
  }

  async deletePhoto(id: number) {
    return await this.delete(`photos/${id}`);
  }
}
