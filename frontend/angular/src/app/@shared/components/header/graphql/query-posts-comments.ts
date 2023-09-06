import { gql } from 'apollo-angular';

export const POSTS_COMMENTS = gql`
  query posts {
    posts {
      id
    }
    comments {
      id
    }
  }
`;
