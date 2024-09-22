import { IsNotEmpty, IsString } from 'class-validator';

export class SongDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  artist: string;

  @IsString()
  @IsNotEmpty()
  duration: string;
}
