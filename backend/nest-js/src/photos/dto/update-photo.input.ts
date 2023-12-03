import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {CreatePhotoInput} from "./create-photo.input";

@InputType()
export class UpdatePhotoInput extends PartialType(CreatePhotoInput) {
}
