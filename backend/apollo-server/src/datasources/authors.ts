import { RESTDataSource } from '@apollo/datasource-rest';

export class AuthorsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getAuthors() {
    return await this.get('users');
  }

  async getAuthorById(id: number) {
    return await this.get(`users/${id}`);
  }
}
