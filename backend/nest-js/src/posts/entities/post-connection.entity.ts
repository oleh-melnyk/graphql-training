import { ObjectType, Field } from '@nestjs/graphql';

import { Post } from './post.entity';
import {ConnectionInfo} from "../../core";

@ObjectType('PostConnection')
export class PostConnection {
  @Field(() => [Post])
  data: Post[];

  @Field(() => ConnectionInfo)
  info: ConnectionInfo;
}
