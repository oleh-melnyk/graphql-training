import { gql } from 'apollo-angular';

export const POSTS_PAGINATED = gql`
  query postsPaginated($page: Int!, $pageSize: Int!) {
    postsPaginated(page: $page, pageSize: $pageSize) {
      data {
        id
        title
        body
      }
      info {
        page
        pages
        total
      }
    }
  }
`;
