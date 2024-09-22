import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableSongs1727027303264 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'songs',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
            isNullable: false,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'artist',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'duration',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  async down(_queryRunner: QueryRunner): Promise<void> {}
}
