import {Injectable, UnprocessableEntityException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePhotoInput, UpdatePhotoInput } from './dto';
import { Photo } from './entities';
import {AlbumConnection} from "../albums/entities";
import {PhotoConnection} from "./entities/photo-connection.entity";

@Injectable()
export class PhotosService {
  constructor(@InjectRepository(Photo) private photoRepository: Repository<Photo>) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find({ order: { id: 'DESC' } });
  }

  async findAllByAlbumId(albumId): Promise<Photo[]> {
    return this.photoRepository.find({ where: { albumId }, order: { id: 'DESC' } });
  }

  async photosPaginated(albumId, page, pageSize): Promise<PhotoConnection> {
    const skip = (page - 1) * pageSize;
    const data = await this.photoRepository.find({where: { albumId }, skip, take: pageSize, order: {id: 'DESC'}});
    const total = await this.photoRepository.count();
    const pages = Math.ceil(total / pageSize);

    return {data, info: {page, pages, total}};
  }

  async findOne(id): Promise<Photo> {
    return this.photoRepository.findOneOrFail({ where: { id } });
  }

  async create(albumId, createPhotoInput: CreatePhotoInput): Promise<Photo> {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
    return this.photoRepository.save({ albumId, ...createPhotoInput });
  }

  async update(id, updatePhotoInput: UpdatePhotoInput): Promise<Photo> {
    const photo = await this.photoRepository.findOne({ where: { id } });
    return this.photoRepository.save({ ...photo, ...updatePhotoInput });
  }

  async remove(id): Promise<Photo> {
    const photo = await this.photoRepository.findOne({ where: { id } });
    if (photo == null) {
      throw new UnprocessableEntityException('Photo entity does not exists with provided ID');
    }

    return this.photoRepository.remove(photo);
  }

  async removeAllByAlbumId(albumId): Promise<Photo[]> {
    const photos = await this.findAllByAlbumId(albumId);
    return this.photoRepository.remove(photos);
  }
}
