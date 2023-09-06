import { paginate } from '../../util';

const POSTS_COUNT = 7;

const posts = (post, args, { dataSources }, info) => {
  return dataSources.postsAPI.getPosts(POSTS_COUNT);
};

const post = (post, args, { dataSources }, info) => {
  return dataSources.postsAPI.getPostById(args.id);
};

const postAuthor = (post, args, { dataSources }, info) => {
  return dataSources.authorsAPI.getAuthorById(post.userId);
};

const postComments = (post, args, { dataSources }, info) => {
  return dataSources.commentsAPI.getCommentsByPostId(post.id);
};

const postsPaginated = async (parent, { page, pageSize }, { dataSources }, info) => {
  const results = await dataSources.postsAPI.getPosts(POSTS_COUNT);

  return paginate({
    arr: results,
    pageNumber: page,
    pageSize: pageSize,
  });
};

export { posts, post, postAuthor, postComments, postsPaginated };
