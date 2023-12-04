export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotoParams {
  title: string;
  url: string;
  thumbnailUrl: string;
}
