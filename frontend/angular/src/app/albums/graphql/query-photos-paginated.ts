import { gql } from 'apollo-angular';

export const PHOTOS_PAGINATED = gql`
  query photosPaginated($albumId: Int!, $page: Int!, $pageSize: Int!) {
    photosPaginated(albumId: $albumId, page: $page, pageSize: $pageSize) {
      data {
        id
        title
        url
        thumbnailUrl
      }
      info {
        page
        pages
        total
      }
    }
  }
`;
