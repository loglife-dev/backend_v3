import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePermission1630349955084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'permission',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'key',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'group',
                        type: 'varchar',
                    },
                    {
                        name: 'order',
                        type: 'integer'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('permission')
    }

}
