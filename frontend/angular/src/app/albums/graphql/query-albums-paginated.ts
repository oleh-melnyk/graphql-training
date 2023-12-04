import { gql } from 'apollo-angular';

export const ALBUMS_PAGINATED = gql`
  query albumsPaginated($page: Int!, $pageSize: Int!) {
    albumsPaginated(page: $page, pageSize: $pageSize) {
      data {
        id
        title
        coverUrl
      }
      info {
        page
        pages
        total
      }
    }
  }
`;
