import { Module } from '@nestjs/common';

import { SongController } from './song.cotroller';
import { SongService } from './services/song.service';
import { SongDAO } from './daos/song.dao';

@Module({ controllers: [SongController], providers: [SongService, SongDAO] })
export class SongModule {}
