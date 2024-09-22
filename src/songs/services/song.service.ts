import { Injectable } from '@nestjs/common';
import { SongDAO } from '../daos/song.dao';

export type CreateParams = {
  name: string;
  artist: string;
  duration: string;
};

@Injectable()
export class SongService {
  constructor(private readonly songDAO: SongDAO) {}

  async getAll() {
    return this.songDAO.findAll();
  }

  async getOne(id: string) {
    return this.songDAO.findOne(id);
  }

  async create({ name, artist, duration }: CreateParams) {
    return this.songDAO.save({ name, artist, duration });
  }

  delete(id: string) {
    this.songDAO.delete(id);
  }
}
