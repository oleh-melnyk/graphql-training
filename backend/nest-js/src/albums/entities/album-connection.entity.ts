import { ObjectType, Field } from '@nestjs/graphql';

import { Album } from './album.entity';
import {ConnectionInfo} from "../../core";

@ObjectType('AlbumConnection')
export class AlbumConnection {
  @Field(() => [Album])
  data: Album[];

  @Field(() => ConnectionInfo)
  info: ConnectionInfo;
}
