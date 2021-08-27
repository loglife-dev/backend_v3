import { MigrationInterface, Not, QueryRunner, Table } from "typeorm";

export class CreateCity1629999276926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'city',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,


                    },
                    {
                        name: 'state',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'hub_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'deadline_collect',
                        type: 'timestamp',
                        isNullable: false,
                    },
                    {
                        name: 'observation',
                        type: 'text'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKCity',
                        referencedTableName: 'hub',
                        referencedColumnNames: ['id'],
                        columnNames: ['hub_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('city')
    }

}
