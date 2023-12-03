import {Resolver, Query, Mutation, Args, Int, ResolveField, Parent} from '@nestjs/graphql';

import {Album, AlbumConnection} from './entities';
import {CreateAlbumInput, UpdateAlbumInput} from './dto';

import {PhotosService} from '../photos/photos.service';
import {Photo} from "../photos/entities";
import {AlbumsService} from "./albums.service";

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService, private readonly photosService: PhotosService) {
  }

  @ResolveField('photos', () => [Photo])
  photos(@Parent() {id: albumId}: Album): Promise<Photo[]> {
    return this.photosService.findAllByAlbumId(albumId);
  }

  @Query(() => [Album], {name: 'albums'})
  findAll(): Promise<Album[]> {
    return this.albumsService.findAll();
  }

  @Query(() => Album, {name: 'album'})
  findOne(@Args('id', {type: () => Int}) id: number): Promise<Album> {
    return this.albumsService.findOne(id);
  }

  @Query(() => AlbumConnection, {name: 'albumsPaginated'})
  albumsPaginated(
      @Args('page', {type: () => Int, defaultValue: 1}) page: number,
      @Args('pageSize', {type: () => Int, defaultValue: 5}) pageSize: number
  ): Promise<AlbumConnection> {
    return this.albumsService.albumsPaginated(page, pageSize);
  }

  @Mutation(() => Album)
  createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput): Promise<Album> {
    return this.albumsService.create(createAlbumInput);
  }

  @Mutation(() => Album)
  updateAlbum(@Args('id', {type: () => Int}) id: number, @Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput): Promise<Album> {
    return this.albumsService.update(id, updateAlbumInput);
  }

  @Mutation(() => Album)
  removeAlbum(@Args('id', {type: () => Int}) id: number): Promise<Album> {
    return this.albumsService.remove(id);
  }
}
