import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { SongModule } from './songs/song.module';

@Module({
  imports: [SongModule],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
