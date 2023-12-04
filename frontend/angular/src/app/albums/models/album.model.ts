export interface Album {
  id: number;
  title: string;
  coverUrl: string;
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
