import { gql } from 'apollo-angular';

export const POST = gql`
  query post($id: Int!) {
    post(id: $id) {
      id
      title
      body
      comments {
        name
        email
        body
      }
    }
  }
`;
