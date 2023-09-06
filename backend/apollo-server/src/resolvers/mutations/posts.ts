const createPost = (post, { createPostInput }, { dataSources }, info) => {
  return { id: '101', ...createPostInput }; // dataSources.postsAPI.createPost(createPostInput);
};

const updatePost = (post, { id, updatePostInput }, { dataSources }, info) => {
  return dataSources.postsAPI.updatePost(id, updatePostInput);
};

const deletePost = (post, { id }, { dataSources }, info) => {
  return dataSources.postsAPI.deletePost(id);
};

export { createPost, updatePost, deletePost };
