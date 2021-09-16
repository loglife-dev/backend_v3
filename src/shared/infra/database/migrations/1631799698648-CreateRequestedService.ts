import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRequestedService1631799698648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'requested_service',
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
                        name: 'budget_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'source_address_id',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'destination_address_id',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'source_collector_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'destination_collector_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'source_branch_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'destination_branch_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'provider_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'deadline',
                        type: 'integer'
                    },
                    {
                        name: 'service_type',
                        type: 'varchar',
                    },
                    {
                        name: 'franchising',
                        type: 'float',
                    },
                    {
                        name: 'modal',
                        type: 'varchar'
                    },
                    {
                        name: 'vehicle',
                        type: 'varchar',
                    },
                    {
                        name: 'caixa_termica',
                        type: 'integer',
                    },
                    {
                        name: 'embalagem_secundaria',
                        type: 'integer',
                    },
                    {
                        name: 'gelo_seco',
                        type: 'integer',
                    },
                    {
                        name: 'gelox',
                        type: 'integer',
                    },
                    {
                        name: 'isopor3l',
                        type: 'integer',
                    },
                    {
                        name: 'isopor7l',
                        type: 'integer',
                    },
                    {
                        name: 'terciaria3l',
                        type: 'integer',
                    },
                    {
                        name: 'terciaria8l',
                        type: 'integer',
                    },
                    {
                        name: 'collect_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'collect_hour_start',
                        type: 'timestamp',
                    },
                    {
                        name: 'collect_hour_end',
                        type: 'timestamp',
                    },
                    {
                        name: 'delivery_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'delivery_hour',
                        type: 'timestamp',
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
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKBudget',
                        referencedTableName: 'budget',
                        referencedColumnNames: ['id'],
                        columnNames: ['budget_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                    },
                    {
                        name: 'FKSourceCollector',
                        referencedTableName: 'collector',
                        referencedColumnNames: ['id'],
                        columnNames: ['source_collector_id']
                    },
                    {
                        name: 'FKDestinationCollector',
                        referencedTableName: 'collector',
                        referencedColumnNames: ['id'],
                        columnNames: ['destination_collector_id']
                    },
                    {
                        name: 'FKSourceBranch',
                        referencedTableName: 'branch',
                        referencedColumnNames: ['id'],
                        columnNames: ['source_branch_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKDestinationBranch',
                        referencedTableName: 'branch',
                        referencedColumnNames: ['id'],
                        columnNames: ['destination_branch_id'],
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
                    }             
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('requested_service');
    }

}
