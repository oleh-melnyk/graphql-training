import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';

import { Photo } from './entities';
import { CreatePhotoInput, UpdatePhotoInput } from './dto';
import {PhotosService} from "./photos.service";
import {AlbumConnection} from "../albums/entities";
import {PhotoConnection} from "./entities/photo-connection.entity";

@Resolver(() => Photo)
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}

  @Query(() => [Photo], { name: 'photos' })
  findAll(): Promise<Photo[]> {
    return this.photosService.findAll();
  }

  @Query(() => Photo, { name: 'photos' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Photo> {
    return this.photosService.findOne(id);
  }

  @Query(() => PhotoConnection, {name: 'photosPaginated'})
  photosPaginated(
      @Args('albumId', {type: () => Int, defaultValue: 1}) albumId: number,
      @Args('page', {type: () => Int, defaultValue: 1}) page: number,
      @Args('pageSize', {type: () => Int, defaultValue: 5}) pageSize: number
  ): Promise<PhotoConnection> {
    return this.photosService.photosPaginated(albumId, page, pageSize);
  }

  @Mutation(() => Photo)
  createPhoto(
    @Args('albumId', { type: () => ID! }) albumId: number,
    @Args('createPhotoInput') createPhotoInput: CreatePhotoInput
  ): Promise<Photo> {
    return this.photosService.create(albumId, createPhotoInput);
  }

  @Mutation(() => Photo)
  updatePhoto(@Args('id', { type: () => Int }) id: number, @Args('updatePhotoInput') updatePhotoInput: UpdatePhotoInput): Promise<Photo> {
    return this.photosService.update(id, updatePhotoInput);
  }

  @Mutation(() => Photo)
  removePhoto(@Args('id', { type: () => Int }) id: number): Promise<Photo> {
    return this.photosService.remove(id);
  }
}
