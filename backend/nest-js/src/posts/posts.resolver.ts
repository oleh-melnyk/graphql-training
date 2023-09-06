import { Resolver, Query, Mutation, Subscription, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

import { Post, PostConnection } from './entities';
import { CreatePostInput, UpdatePostInput } from './dto';
import { PostsService } from './posts.service';

import { Comment } from '../comments/entities';
import { CommentsService } from '../comments/comments.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService, private readonly commentsService: CommentsService) {}

  @ResolveField('comments', () => [Comment])
  posts(@Parent() { id: postId }: Post): Promise<Comment[]> {
    return this.commentsService.findAllByPostId(postId);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @Query(() => PostConnection, { name: 'postsPaginated' })
  postsPaginated(
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('pageSize', { type: () => Int, defaultValue: 5 }) pageSize: number
  ): Promise<PostConnection> {
    return this.postsService.postsPaginated(page, pageSize);
  }

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput): Promise<Post> {
    return this.postsService.create(createPostInput);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput): Promise<Post> {
    return this.postsService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postsService.remove(id);
  }

  @Subscription(() => Post)
  postDeleted() {
    return pubSub.asyncIterator('postDeleted');
  }
}
