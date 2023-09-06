import { gql } from 'apollo-angular';

export const REMOVE_POST = gql`
  mutation removePost($id: Int!) {
    removePost(id: $id) {
      title
    }
  }
`;
