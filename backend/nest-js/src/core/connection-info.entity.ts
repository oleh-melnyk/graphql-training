import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('ConnectionInfo')
export class ConnectionInfo {
  @Field(() => Int!)
  page: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pages: number;
}
