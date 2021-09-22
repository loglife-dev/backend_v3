import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSetToBoard1632328535643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'setToBoard',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'service_id',
                        type:  'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'step',
                        type: 'varchar',
                    },
                    {
                        name: 'branch_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'driver_id',
                        type: 'uuid',
                    },
                    {
                        name: 'observation',
                        type: 'text',
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
                ],
                foreignKeys: [
                    {
                        name: 'FKService',
                        referencedTableName: 'service',
                        referencedColumnNames: ['id'],
                        columnNames: ['service_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('setToBoard');
    }

}
