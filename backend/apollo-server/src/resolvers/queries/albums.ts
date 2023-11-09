const albums = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getAlbums();
};

const album = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getAlbum(args.id);
};

const albumPhotos = (album, args, { dataSources }, info) => {
  return dataSources.photosAPI.getPhotosByAlbumId(album.id);
};

const albumAuthor = (album, args, { dataSources }, info) => {
  return dataSources.authorsAPI.getAuthorById(album.userId);
};

export { albums, album, albumPhotos, albumAuthor };
