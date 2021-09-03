import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDriver1630599874728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'driver',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isUnique: true,
                    },
                    {
                        name: 'situation',
                        type: 'varchar',
                    },
                    {
                        name: 'firstname',
                        type: 'varchar',
                    },
                    {
                        name: 'lastname',
                        type: 'varchar',
                    },
                    {
                        name: 'collector_id',
                        type: 'uuid',
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'observation',
                        type: 'text',
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
                        name: 'FKCollector',
                        referencedTableName: 'collector',
                        referencedColumnNames: ['id'],
                        columnNames: ['collector_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('driver');
    }

}
