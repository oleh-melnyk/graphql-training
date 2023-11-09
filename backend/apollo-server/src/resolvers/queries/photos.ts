const photo = (photo, args, { dataSources }, info) => {
  return dataSources.photosAPI.getPhoto(args.id);
};

const photos = (photo, args, { dataSources }, info) => {
  return dataSources.photosAPI.getPhotos();
};

const photosInAlbum = (photo, args, { dataSources }, info) => {
  return dataSources.photosAPI.getPhotosByAlbumId(args.albumId);
};

export { photo, photos, photosInAlbum };
