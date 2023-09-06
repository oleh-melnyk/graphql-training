import { postDeleted } from './subscriptions';
import { createPost, updatePost, deletePost, createComment, updateComment, deleteComment } from './mutations';
import {
  posts,
  postsPaginated,
  postComments,
  post,
  postAuthor,
  authors,
  authorAddress,
  authorsByCity,
  comments,
} from './queries';

export default {
  Query: {
    posts,
    post,
    postsPaginated,
    comments,
    authors,
    authorsByCity,
  },
  Mutation: {
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment,
  },
  Subscription: {
    postDeleted: {
      subscribe: postDeleted,
    },
  },
  Post: {
    author: postAuthor,
    comments: postComments,
  },
  Author: {
    address: authorAddress,
  },
};
