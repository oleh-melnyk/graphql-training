import { gql } from 'apollo-angular';

export const UPDATE_ALBUM = gql`
  mutation updateAlbum($updateAlbum: UpdateAlbumInput!, $id: Int!) {
    updateAlbum(updateAlbumInput: $updateAlbum, id: $id) {
      id
      title
      coverUrl
    }
  }
`;
