import { gql } from 'apollo-angular';

export const CREATE_POST = gql`
  mutation createPost($createPost: CreatePostInput!) {
    createPost(createPostInput: $createPost) {
      id
      title
      body
    }
  }
`;
