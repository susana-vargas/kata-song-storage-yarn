import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/database/database.module';
import { SongController } from './song.cotroller';
import { SongDAO } from './daos/song.dao';
import { SongEntity } from './typeorm/entities/song-entity';
import { SongService } from './services/song.service';

@Module({
  controllers: [SongController],
  providers: [SongService, SongDAO],
  imports: [DatabaseModule, TypeOrmModule.forFeature([SongEntity])],
})
export class SongModule {}
