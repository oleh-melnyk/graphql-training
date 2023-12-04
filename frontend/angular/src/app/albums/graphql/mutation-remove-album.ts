import { gql } from 'apollo-angular';

export const REMOVE_ALBUM = gql`
  mutation removeAlbum($id: Int!) {
    removeAlbum(id: $id) {
      title
    }
  }
`;
