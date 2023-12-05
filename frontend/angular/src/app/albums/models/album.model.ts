export interface Album {
  id: number;
  title: string;
  coverUrl: string;
  __typename?: string;
}

export interface AlbumParams {
  title: string;
  coverUrl: string;
}

export interface ConnectionInfo {
  page: number;
  pages: number;
  total: number;
}

export interface AlbumConnection{
  data: Album[];
  info: ConnectionInfo;
}
