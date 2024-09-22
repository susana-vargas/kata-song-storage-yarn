import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

import { SongEntity } from 'src/songs/typeorm/entities/song-entity';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [__dirname + '/../database/migrations/*.ts'],
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: [SongEntity],
  synchronize: true,
};
export const dataSource = new DataSource(dataSourceOptions);
