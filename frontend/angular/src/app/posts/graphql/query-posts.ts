import { gql } from 'apollo-angular';

export const POSTS = gql`
  query posts {
    posts {
      id
      title
      body
    }
  }
`;
