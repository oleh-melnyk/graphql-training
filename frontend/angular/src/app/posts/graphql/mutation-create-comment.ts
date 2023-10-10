import { gql } from 'apollo-angular';

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $createComment: CreateCommentInput!) {
    createComment(postId: $postId, createCommentInput: $createComment) {
      id
      name
      email
      body
      __typename
    }
  }
`;
