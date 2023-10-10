export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  __typename?: string;
}

export interface CommentParams {
  name: string;
  email: string;
  body: string;
}
