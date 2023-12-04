import {ObjectType, Field} from '@nestjs/graphql';

import {ConnectionInfo} from "../../core";
import {Photo} from "./photo.entity";

@ObjectType('PhotoConnection')
export class PhotoConnection {
  @Field(() => [Photo])
  data: Photo[];

  @Field(() => ConnectionInfo)
  info: ConnectionInfo;
}
