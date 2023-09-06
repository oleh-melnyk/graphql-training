import { RESTDataSource } from '@apollo/datasource-rest';

export class CommentsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getComments() {
    return await this.get('comments');
  }

  async getCommentsByPostId(postId: number) {
    return await this.get(`comments?postId=${postId}`);
  }

  async createComment(postId: string, createCommentInput: { title: string; body: string }) {
    return await this.post('comments', { postId, ...createCommentInput } as any);
  }

  async updateComment(id: number, updateCommentInput: { title: string; body: string }) {
    return await this.put(`comments/${id}`, updateCommentInput);
  }

  async deleteComment(id: number) {
    return await this.delete(`comments/${id}`);
  }
}
