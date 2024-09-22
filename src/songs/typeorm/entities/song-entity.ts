import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('songs')
export class SongEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  artist: string;

  @Column({ type: 'varchar' })
  duration: string;
}
