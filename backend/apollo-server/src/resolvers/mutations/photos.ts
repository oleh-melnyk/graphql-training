const createPhoto = (photo, { albumId, createPhotoInput }, { dataSources }, info) => {
  return dataSources.photosAPI.createPhoto(albumId, createPhotoInput);
};

const updatePhoto = (photo, { id, updatePhotoInput }, { dataSources }, info) => {
  return dataSources.photosAPI.updatePhoto(id, updatePhotoInput);
};

const deletePhoto = (photo, { id }, { dataSources }, info) => {
  return dataSources.photosAPI.deletePhoto(id);
};

export { createPhoto, updatePhoto, deletePhoto };
