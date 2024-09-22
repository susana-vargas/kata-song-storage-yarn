import { v4 as uuidv4 } from 'uuid';

import { CreateParams } from '../services/song.service';

export class SongDAO {
  private songs = [];

  async findAll() {
    return this.songs;
  }

  async findOne(id: string) {
    const song = this.songs.find((song) => song.id === id);
    if (!song) {
      console.log(`Item with id ${id} not found`);
    }
    return song;
  }

  async save({ name, artist, duration }: CreateParams) {
    const newSong = {
      id: uuidv4(),
      name,
      artist,
      duration,
    };
    console.log('Se creó una nueva cancion');

    this.songs.push(newSong);
    return newSong;
  }

  async delete(id: string): Promise<void> {
    const song = await this.findOne(id);
    if (!song) {
      console.log(`Song with id ${id} not found`);
    }

    this.songs = this.songs.filter((song) => song.id !== id);
  }
}
