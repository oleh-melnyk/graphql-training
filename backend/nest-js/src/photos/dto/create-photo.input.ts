import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  thumbnailUrl: string;
}
