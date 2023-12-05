import {Injectable, UnprocessableEntityException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {CreateAlbumInput, UpdateAlbumInput} from './dto';
import {Album, AlbumConnection} from './entities';
import {PhotosService} from "../photos/photos.service";

@Injectable()
export class AlbumsService {
  constructor(
      @InjectRepository(Album) private albumRepository: Repository<Album>,
      private readonly photosService: PhotosService
  ) {
  }

  async findAll(): Promise<Album[]> {
    return this.albumRepository.find({order: {id: 'DESC'}});
  }

  async findOne(id): Promise<Album> {
    return this.albumRepository.findOneOrFail({where: {id}});
  }

  async albumsPaginated(page, pageSize): Promise<AlbumConnection> {
    const skip = (page - 1) * pageSize;
    const data = await this.albumRepository.find({skip, take: pageSize, order: {id: 'DESC'}});
    const total = await this.albumRepository.count();
    const pages = Math.ceil(total / pageSize);

    return {data, info: {page, pages, total}};
  }

  async create(createAlbumInput: CreateAlbumInput): Promise<Album> {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
    return this.albumRepository.save(createAlbumInput);
  }

  async update(id, updateAlbumInput: UpdateAlbumInput): Promise<Album> {
    const album = await this.albumRepository.findOne({where: {id}});
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });

    return this.albumRepository.save({...album, ...updateAlbumInput});
  }

  async remove(id): Promise<Album> {
    const album = await this.albumRepository.findOne({where: {id}});
    if (album == null) {
      throw new UnprocessableEntityException('Album entity does not exists with provided ID');
    }

    await this.photosService.removeAllByAlbumId(id);
    await this.albumRepository.remove(album);

    return Promise.resolve({...album, id});
  }
}
