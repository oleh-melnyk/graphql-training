import { Comment } from './comment.model';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
  comments?: Comment[];
}

export interface PostParams {
  title: string;
  body: string;
}

export interface ConnectionInfo {
  page: number;
  pages: number;
  total: number;
}
