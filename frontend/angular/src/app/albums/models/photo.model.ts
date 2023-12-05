import {Album, ConnectionInfo} from "./album.model";

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  __typename: string
}

export interface PhotoParams {
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotoConnection{
  data: Photo[];
  info: ConnectionInfo;
}
