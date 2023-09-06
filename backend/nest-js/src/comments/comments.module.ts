import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Comment } from './entities';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentsResolver, CommentsService],
})
export class CommentsModule {}
