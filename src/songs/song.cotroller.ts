import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SongDTO } from './dto/song.dto';
import { SongService } from './services/song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  async getAll() {
    return this.songService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.songService.getOne(id);
  }

  @Post()
  async register(@Body() { name, artist, duration }: SongDTO) {
    const newSong = await this.songService.create({ name, artist, duration });
    return {
      message: 'Canción creada exitosamente',
      song: newSong,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.songService.delete(id);
  }
}
