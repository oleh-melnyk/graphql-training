import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field()
  title: string;
}
