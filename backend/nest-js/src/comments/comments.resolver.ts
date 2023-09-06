import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';

import { Comment } from './entities';
import { CreateCommentInput, UpdateCommentInput } from './dto';
import { CommentsService } from 'src/comments/comments.service';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Query(() => [Comment], { name: 'comments' })
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Comment> {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => Comment)
  createComment(
    @Args('postId', { type: () => ID! }) postId: number,
    @Args('createCommentInput') createCommentInput: CreateCommentInput
  ): Promise<Comment> {
    return this.commentsService.create(postId, createCommentInput);
  }

  @Mutation(() => Comment)
  updateComment(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput): Promise<Comment> {
    return this.commentsService.update(updateCommentInput.id, updateCommentInput);
  }

  @Mutation(() => Comment)
  removeComment(@Args('id', { type: () => Int }) id: number): Promise<Comment> {
    return this.commentsService.remove(id);
  }
}
