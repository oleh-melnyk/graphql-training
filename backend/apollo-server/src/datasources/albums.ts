import {RESTDataSource} from '@apollo/datasource-rest';

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getAlbums() {
    return await this.get('albums');
  }

  async getAlbum(id: number) {
    return await this.get(`albums/${id}`);
  }
}
