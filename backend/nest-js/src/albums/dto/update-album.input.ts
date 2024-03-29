import {InputType, Field} from '@nestjs/graphql';

@InputType()
export class UpdateAlbumInput {
  @Field()
  title: string;
  @Field({nullable: true})
  coverUrl: string
}
