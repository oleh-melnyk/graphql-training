const comments = (comment, args, { dataSources }, info) => {
  return dataSources.commentsAPI.getComments();
};

export { comments };
