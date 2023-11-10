const createAlbum = (album, { createAlbumInput }, { dataSources }, info) => {
  return { id: '101', ...createAlbumInput }; // dataSources.postsAPI.createAlbum(createAlbumInput);
};

const updateAlbum = (album, { id, updateAlbumInput }, { dataSources }, info) => {
  return dataSources.postsAPI.updateAlbum(id, updateAlbumInput);
};

const deleteAlbum = (album, { id }, { dataSources }, info) => {
  return dataSources.postsAPI.deleteAlbum(id);
};

export { createAlbum, updateAlbum, deleteAlbum };
