import { gql } from 'apollo-angular';

export const ALBUMS = gql`
  query albums {
    albums {
      id
      title,
      coverUrl
    }
  }
`;
