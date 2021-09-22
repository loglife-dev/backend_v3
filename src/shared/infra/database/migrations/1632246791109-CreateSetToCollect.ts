import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSetToCollect1632246791109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'setToCollect',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'service_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'step',
                        type: 'varchar'
                    },
                    {
                        name: 'address_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'provider_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'driver_id',
                        type: 'uuid',
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
                        name: 'FKService',
                        referencedTableName: 'service',
                        referencedColumnNames: ['id'],
                        columnNames: ['service_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    {
                        name: 'FKAddress',
                        referencedTableName: 'address',
                        referencedColumnNames: ['id'],
                        columnNames: ['address_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKProvider',
                        referencedTableName: 'provider',
                        referencedColumnNames: ['id'],
                        columnNames: ['provider_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKDriver',
                        referencedTableName: 'driver',
                        referencedColumnNames: ['id'],
                        columnNames: ['driver_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('setToCollect');
    }

}
