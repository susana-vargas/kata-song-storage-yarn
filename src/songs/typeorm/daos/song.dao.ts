import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateParams } from '../../services/song.service';
import { SongEntity } from '../entities/song-entity';

export class SongDAO {
  constructor(
    @InjectRepository(SongEntity)
    private songRepository: Repository<SongEntity>,
  ) {}

  async findOne(id: string) {
    return this.songRepository.findOne({ where: { id } });
  }

  async findAll() {
    return this.songRepository.find();
  }

  async save({ name, artist, duration }: CreateParams) {
    const newSong = {
      id: uuidv4(),
      name,
      artist,
      duration,
    };
    console.log('Se creó una nueva cancion');

    return this.songRepository.save(newSong);
  }

  async delete(id: string): Promise<void> {
    await this.songRepository.delete(id);
  }
}
