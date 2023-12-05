import { gql } from 'apollo-angular';

export const ALBUM = gql`
  query album($id: Int!) {
    album(id: $id) {
      id
      title
      photos {
        id
        title
        thumbnailUrl
      }
    }
  }
`;
