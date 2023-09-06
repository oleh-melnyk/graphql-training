const createComment = (comment, { postId, createCommentInput }, { dataSources }, info) => {
  return dataSources.commentsAPI.createComment(postId, createCommentInput);
};

const updateComment = (comment, { id, updateCommentInput }, { dataSources }, info) => {
  return dataSources.commentsAPI.updateComment(id, updateCommentInput);
};

const deleteComment = (comment, { id }, { dataSources }, info) => {
  return dataSources.commentsAPI.deleteComment(id);
};

export { createComment, updateComment, deleteComment };
