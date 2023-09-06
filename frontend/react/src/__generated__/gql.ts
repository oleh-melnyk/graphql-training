/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query postsComments {\n    posts {\n      id\n    }\n    comments {\n      id\n    }\n  }\n": types.PostsCommentsDocument,
    "\n  mutation createComment($postId: ID!, $createComment: CreateCommentInput!) {\n    createComment(postId: $postId, createCommentInput: $createComment) {\n      id\n      name\n      email\n      body\n    }\n  }\n": types.CreateCommentDocument,
    "\n  query post($id: Int!) {\n    post(id: $id) {\n      id\n      title\n      body\n      comments {\n        name\n        email\n        body\n      }\n    }\n  }\n": types.PostDocument,
    "\n  query posts {\n    posts {\n      id\n      title\n      body\n    }\n  }\n": types.PostsDocument,
    "\n  mutation createPost($createPost: CreatePostInput!) {\n    createPost(createPostInput: $createPost) {\n      id\n      title\n      body\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation updatePost($updatePost: UpdatePostInput!) {\n    updatePost(updatePostInput: $updatePost) {\n      id\n      title\n      body\n    }\n  }\n": types.UpdatePostDocument,
    "\n  mutation removePost($id: Int!) {\n    removePost(id: $id) {\n      title\n    }\n  }\n": types.RemovePostDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query postsComments {\n    posts {\n      id\n    }\n    comments {\n      id\n    }\n  }\n"): (typeof documents)["\n  query postsComments {\n    posts {\n      id\n    }\n    comments {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createComment($postId: ID!, $createComment: CreateCommentInput!) {\n    createComment(postId: $postId, createCommentInput: $createComment) {\n      id\n      name\n      email\n      body\n    }\n  }\n"): (typeof documents)["\n  mutation createComment($postId: ID!, $createComment: CreateCommentInput!) {\n    createComment(postId: $postId, createCommentInput: $createComment) {\n      id\n      name\n      email\n      body\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query post($id: Int!) {\n    post(id: $id) {\n      id\n      title\n      body\n      comments {\n        name\n        email\n        body\n      }\n    }\n  }\n"): (typeof documents)["\n  query post($id: Int!) {\n    post(id: $id) {\n      id\n      title\n      body\n      comments {\n        name\n        email\n        body\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query posts {\n    posts {\n      id\n      title\n      body\n    }\n  }\n"): (typeof documents)["\n  query posts {\n    posts {\n      id\n      title\n      body\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createPost($createPost: CreatePostInput!) {\n    createPost(createPostInput: $createPost) {\n      id\n      title\n      body\n    }\n  }\n"): (typeof documents)["\n  mutation createPost($createPost: CreatePostInput!) {\n    createPost(createPostInput: $createPost) {\n      id\n      title\n      body\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updatePost($updatePost: UpdatePostInput!) {\n    updatePost(updatePostInput: $updatePost) {\n      id\n      title\n      body\n    }\n  }\n"): (typeof documents)["\n  mutation updatePost($updatePost: UpdatePostInput!) {\n    updatePost(updatePostInput: $updatePost) {\n      id\n      title\n      body\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation removePost($id: Int!) {\n    removePost(id: $id) {\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation removePost($id: Int!) {\n    removePost(id: $id) {\n      title\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;