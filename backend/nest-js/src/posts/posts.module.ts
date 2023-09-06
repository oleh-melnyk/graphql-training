import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './entities';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

import { Comment } from '../comments/entities';
import { CommentsService } from '../comments/comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment])],
  providers: [PostsResolver, PostsService, CommentsService],
})
export class PostsModule {}
