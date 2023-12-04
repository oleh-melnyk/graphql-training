import { gql } from 'apollo-angular';

export const CREATE_PHOTO = gql`
  mutation($createPhotoInput: CreatePhotoInput!, $albumId: ID!){
    createPhoto(createPhotoInput: $createPhotoInput, albumId: $albumId){
      albumId,
      url,
      title,
      thumbnailUrl,
      __typename
    }
  }
`;
