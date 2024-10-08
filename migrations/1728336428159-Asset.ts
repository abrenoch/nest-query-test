import { MigrationInterface, QueryRunner } from 'typeorm';

export class Asset1728336428159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`asset\` (
            \`id\` INT NOT NULL AUTO_INCREMENT,
            \`asset_name\` VARCHAR(512) NOT NULL DEFAULT '0',
            PRIMARY KEY (\`id\`)
        )
        COLLATE='utf8mb4_general_ci';`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
