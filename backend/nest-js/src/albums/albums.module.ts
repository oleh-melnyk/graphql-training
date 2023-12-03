import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Album } from './entities';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';

import { PhotosService } from '../photos/photos.service';
import {Photo} from "../photos/entities";

@Module({
  imports: [TypeOrmModule.forFeature([Album, Photo])],
  providers: [AlbumsService, AlbumsResolver, PhotosService],
})
export class AlbumsModule {}
